/* eslint-disable import/prefer-default-export */
import { prisma } from '@/lib/server/prisma'

export async function GET(req) {
  const password = req.headers.get('password')
  const query = req.url.split('?')[1]
  const params = new URLSearchParams(query)

  const page = Number(params.get('page')) || 1
  const limit = Number(params.get('limit')) || 10
  const order = params.get('order').toLowerCase() || 'desc'

  if (password !== (process.env.HEADER_PASSWORD || 'Drezzo@@123')) {
    return Response.json(
      {
        data: null,
        error: 'Unauthorized',
      },
      {
        status: 401,
      },
    )
  }

  const [projects, count] = await prisma.$transaction([
    prisma.projects.findMany({
      include: {
        file: true,
        _count: {
          select: { file: true },
        },
      },
      skip: (Number(page) - 1) * Number(limit),
      orderBy: {
        createdAt: order,
      },
    }),
    prisma.projects.count(),
  ])

  return Response.json({
    data: projects,
    totalItem: count,
    totalPage: Math.ceil(count / limit),
  })
}
