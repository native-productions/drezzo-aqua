/* eslint-disable import/no-extraneous-dependencies */

'use client'

import { upload as _upload } from '@vercel/blob/client'
import { useState } from 'react'

export default function useBlob() {
  const [blob, setBlob] = useState(null)
  const [error, setError] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [success, setSuccess] = useState(false)

  const upload = async (file, access = 'public') => {
    try {
      setUploading(true)

      const newBlob = await _upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      })

      setBlob(newBlob)
      setSuccess(true)
      setUploading(false)
    } catch (_error) {
      setError(_error)
    }
  }

  return {
    blob,
    setBlob,
    upload,
    uploading,
    success,
    error,
  }
}
