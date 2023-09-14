import { handleUpload } from '@vercel/blob/client'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const body = await request.json()

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname /* , clientPayload */) =>
        // Generate a client token for the browser to upload the file

        // ⚠️ Authenticate users before generating the token.
        // Otherwise, you're allowing anonymous uploads.
        // const { user } = await auth(request);
        // const userCanUpload = canUpload(user, pathname);
        // if (!userCanUpload) {
        //   throw new Error('Not authorized');
        // }

        ({
          allowedContentTypes: ['image/jpg', 'image/png', 'image/gif'],
          tokenPayload: JSON.stringify({
            // optional, sent to your server on upload completion
            // userId: user.id,
            // postId
          }),
        }),
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Get notified of client upload completion
        // ⚠️ This will not work on `localhost` websites,
        // Use ngrok or similar to get the full upload flow

        console.log('blob upload completed', blob, tokenPayload)

        try {
          // Run any logic after the file upload completed
          // const { userId } = JSON.parse(tokenPayload);
          // await db.update({ avatar: blob.url, userId });
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
