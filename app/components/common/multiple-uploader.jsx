'use client'

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import { useDropzone } from 'react-dropzone'
import { cn } from '@/lib/utils/view'
import Image from 'next/image'
import { Button } from '../ui/button'

function MultipleUploader({
  onDrop,
  accept,
  files,
  handleRemoveFile,
  maxFiles,
  icon,
  label,
}) {
  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      accept,
      multiple: true,
      maxFiles,
    })

  return (
    <div>
      {(files && files.length) < maxFiles && (
        <div
          {...getRootProps()}
          className={cn(
            'hover:bg-rgba05 mx-auto flex h-28 w-full items-center justify-center rounded-lg border p-1.5 text-center font-medium hover:cursor-pointer hover:border-stone-500 md:h-40 md:p-3',
            isDragAccept && 'bg-63b border-2 border-white font-bold text-white',
          )}
        >
          <input {...getInputProps()} />

          <div className="flex flex-col items-center justify-center gap-y-3 md:scale-90 md:gap-y-6">
            {icon || (
              <Image
                src="/svgs/image.svg"
                className="max-w-[20px] md:max-w-none"
                width={36}
                height={28}
                alt="img"
              />
            )}
            <div className="flex flex-col gap-y-2">
              <h1 className="text-xs text-white md:text-base">
                {isDragAccept
                  ? 'File will be uploaded'
                  : isDragReject
                  ? 'Unable to upload file'
                  : 'Upload a file or drag and drop'}
              </h1>
              <p className="text-xs font-normal">{label}</p>
            </div>
          </div>
        </div>
      )}
      {files && files.length > 0 && (
        <ul className="my-1 rounded-lg border p-2">
          <p className="font-semibold">Selected file</p>
          <hr className="mb-3" />
          {files.map((file, index) => (
            <li
              key={file.path + index}
              className="flex items-center justify-between gap-5 p-1"
            >
              {file.path} - {file.size} bytes
              <Button size="sm" onClick={() => handleRemoveFile(file.path)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MultipleUploader
