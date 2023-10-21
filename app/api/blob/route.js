/* eslint-disable import/prefer-default-export */
import { handleUpload } from '@vercel/blob/client'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/server/prisma'

export async function POST(request) {
  const body = await request.json()

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        const clientPayload = body?.payload?.clientPayload

        return {
          tokenPayload: JSON.stringify({
            projectId: clientPayload.projectId,
            fileName: clientPayload.fileName,
            type: clientPayload.type,
          }),
        }
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        const payload = JSON.parse(tokenPayload)

        try {
          await prisma.projects.update({
            where: {
              id: payload.projectId,
            },
            data: {
              file: {
                create: {
                  fileName: payload.fileName,
                  url: blob.url,
                  type: payload.type,
                },
              },
            },
          })
        } catch (error) {
          throw new Error('Could not update user')
        }
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }, // The webhook will retry 5 times waiting for a status 200
    )
  }
}
