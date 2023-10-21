/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */

'use client'

import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import {
  categoryOptions,
  projectFormSchema,
  whereDoYouKnowOptions,
} from '@/lib/constants/forms'
import { submitProject } from '@/lib/server/actions/project.action'
import { capitalize } from '@/lib/utils/view'
import { useState } from 'react'
import { FileIcon } from '@radix-ui/react-icons'
import { countriesOptions } from '@/lib/constants/nationality'
import { useRouter } from 'next/navigation'
import uploadBlob from '@/lib/apiService'
import { useToast } from '../ui/use-toast'
import MultipleUploader from './multiple-uploader'
import DrezzoButton from './drezzo-button'
import Combobox from './combobox'
import CheckboxComponent from './checkbox'

export default function SubmitForm() {
  const { back } = useRouter()
  const { toast } = useToast()
  const [blob, setBlob] = useState({
    proposal: [],
    file: [],
  })
  const [loading, setLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(projectFormSchema),
  })

  const onSubmit = async (data) => {
    const proposal = blob.proposal[0]
    const file = blob.file[0]

    const datas = { ...data, file, proposal }

    if (!data.email && !data.telegram) {
      form.setError('telegram', {
        type: 'custom',
        message: 'Please fill at least one contact',
      })
      return
    }

    delete datas.file
    delete datas.proposal

    try {
      setLoading(true)

      const newProject = await submitProject(datas)

      const resUploads = await uploadBlob(newProject?.id, {
        proposal,
        fileZip: file,
      })

      console.log(resUploads)

      toast({
        title: 'Thanks for submitting your project 🎉',
        description:
          'Project submitted successfully ✅, we will review it soon',
        status: 'success',
        duration: 5000,
      })

      setLoading(false)

      // setTimeout(() => {
      //   form.reset()
      //   back()
      // }, 500)
    } catch (error) {
      console.error('@submitProjectError =>', error)

      const errorUnique = error.message.includes('Unique constraint failed')
      const errorEmail = error.message.includes('email')

      if (errorUnique && errorEmail) {
        form.setFocus('email')
        form.setError('email', {
          type: 'manual',
          message: 'Email already exists',
        })
        toast({
          title: 'Error',
          description: 'Email already exists',
          status: 'error',
          duration: 5000,
        })
        setLoading(false)
        return
      }

      toast({
        title: 'Error',
        description: 'Something went wrong',
        status: 'error',
        duration: 5000,
      })
      setLoading(false)
    }
  }

  const onDrop = (acceptedBlob, key) => {
    const file = acceptedBlob[0]

    const blobizeInMB = Number(file.size / 1024 / 1024).toFixed(2)

    if (file.type !== `application/${key === 'file' ? 'zip' : 'pdf'}`) {
      toast({
        description: `File must be ${key === 'file' ? 'ZIP' : 'PDF'}`,
        status: 'error',
        duration: 5000,
      })
      return
    }

    if (key === 'file' && file.size > 10000000 * 5) {
      toast({
        title: 'File size is too large',
        description: `Expected file size is at most 50MB, but got ${blobizeInMB}MB`,
        status: 'error',
        duration: 5000,
      })
      return
    }

    if (key === 'proposal' && file.size > 10000000) {
      toast({
        title: 'File size is too large',
        description: `Expected file size is at most 10MB, but got ${blobizeInMB}MB`,
        status: 'error',
        duration: 5000,
      })
      return
    }

    setBlob((prev) => ({ ...prev, [key]: acceptedBlob }))
    form.setValue(key, acceptedBlob[0])
  }

  const handleRemoveFile = (key) => {
    setBlob((prev) => ({ ...prev, [key]: [] }))
  }

  const isBasicInput = (key) =>
    key !== 'file' &&
    key !== 'listProjectMember' &&
    key !== 'nationality' &&
    key !== 'whereDoYouKnow' &&
    key !== 'isAgree' &&
    key !== 'proposal' &&
    key !== 'category'

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {Object.keys(projectFormSchema.shape).map((key) => (
          <FormField
            key={key}
            control={form.control}
            name={key}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  {isBasicInput(key) && (
                    <Input
                      className="py-1 text-xs text-white md:text-base"
                      type={key === 'email' ? 'email' : 'text'}
                      placeholder={
                        key !== 'idType'
                          ? capitalize(field.name)
                          : 'Type of ID: Identity, Passport, or related'
                      }
                      onChange={(e) => {
                        field.onChange(e.target.value)
                      }}
                      {...field}
                    />
                  )}
                </FormControl>
                {key === 'nationality' && (
                  <Combobox
                    name={capitalize(field.name)}
                    items={countriesOptions}
                    onSelect={(value) => {
                      form.setValue('nationality', value)
                    }}
                  />
                )}
                {key === 'category' && (
                  <Combobox
                    name={capitalize(field.name)}
                    items={categoryOptions}
                    onSelect={(value) => {
                      form.setValue('category', value)
                    }}
                  />
                )}
                {key === 'whereDoYouKnow' && (
                  <Combobox
                    name={capitalize(field.name)}
                    items={whereDoYouKnowOptions}
                    onSelect={(value) => {
                      form.setValue('whereDoYouKnow', value)
                    }}
                  />
                )}
                {key === 'proposal' && (
                  <MultipleUploader
                    accept=".pdf"
                    onDrop={(e) => onDrop(e, 'proposal')}
                    files={blob?.proposal}
                    icon={<FileIcon className="h-5 w-5" />}
                    handleRemoveFile={() => handleRemoveFile('proposal')}
                    maxFiles={1}
                    label="Proposal PDF"
                  />
                )}
                {key === 'file' && (
                  <MultipleUploader
                    accept=".zip"
                    onDrop={(e) => onDrop(e, 'file')}
                    files={blob?.file}
                    icon={<FileIcon className="h-5 w-5" />}
                    handleRemoveFile={() => handleRemoveFile('file')}
                    maxFiles={1}
                    label="Your NFTs assets (in ZIP)"
                  />
                )}
                {key === 'isAgree' && (
                  <CheckboxComponent
                    onCheckedChange={field.onChange}
                    {...field}
                    label="By clicking this button you agree to comply with these Terms and any other rules or guidelines provided by the organizers of the Competition"
                  />
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <DrezzoButton
          className="text-sm md:text-base"
          size="sm"
          loading={loading}
          type="submit"
        >
          Submit
        </DrezzoButton>
      </form>
    </Form>
  )
}
