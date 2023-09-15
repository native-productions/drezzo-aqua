import { Storage } from '@google-cloud/storage'

const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  credentials: {
    client_email: process.env.GCS_CLIENT_EMAIL,
    private_key: process.env.GCS_PRIVATE_KEY,
    client_id: process.env.GCS_CLIENT_ID,
    type: 'service_account',
  },
})

export async function generateGscPolicy(filename) {
  const bucket = storage.bucket(process.env.GCS_BUCKET_NAME)
  const fileUpload = bucket.file(filename)
  const res = await fileUpload.generateSignedPostPolicyV4({
    fields: {
      'x-goog-meta-test': 'data',
      bucket: process.env.GCS_BUCKET_NAME,
    },
    expires: Date.now() + 1 * 60 * 1000,
  })

  return res
}

export const gcsPublicUrl = `https://storage.googleapis.com`
export async function uploadToBucket(file, gcsFilePath) {
  try {
    console.log(file, "@file?")
    const bucket = storage.bucket(process.env.GCS_BUCKET_NAME)
    const bucketFile = await bucket.upload(file.filepath || file, {
      destination: gcsFilePath,
    })
    return bucketFile
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}
