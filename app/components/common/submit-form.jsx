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
import { useFieldArray, useForm } from 'react-hook-form'
import { projectFormSchema, whereDoYouKnowOptions } from '@/lib/constants/forms'
import { submitProject } from '@/lib/server/actions/project.action'
import { capitalize } from '@/lib/utils/view'
import { useState, useEffect, Fragment } from 'react'
import { TrashIcon } from '@radix-ui/react-icons'
import { countriesOptions } from '@/lib/constants/nationality'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import MultipleUploader from './multiple-uploader'
import DrezzoButton from './drezzo-button'
import Combobox from './combobox'

export default function SubmitForm() {
  const { back } = useRouter()
  const { toast } = useToast()
  const [blob, setBlob] = useState([])
  const [loading, setLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(projectFormSchema),
  })
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'listProjectMember',
  })

  const onSubmit = async (data) => {
    const members = data.listProjectMember.map((item) => item.member)
    const file = blob[0]
    const datas = { ...data, listProjectMember: members, file }

    if (!data.email && !data.telegram) {
      form.setError('telegram', {
        type: 'custom',
        message: 'Please fill at least one contact',
      })
      return
    }

    if (
      data.listProjectMember.length === 0 ||
      !data.listProjectMember[0].member
    ) {
      form.setError('listProjectMember', {
        type: 'custom',
        message: 'Please fill at least one member',
      })
      return
    }

    const formData = new FormData()

    Object.keys(datas).forEach((key) => {
      if (key === 'file') {
        formData.append(key, datas[key])
      } else {
        formData.append(key, JSON.stringify(datas[key]))
      }
    })

    try {
      setLoading(true)

      await submitProject(formData, file.name)

      toast({
        title: 'Thanks for submitting your project 🎉',
        description:
          'Project submitted successfully ✅, we will review it soon',
        status: 'success',
        duration: 5000,
      })

      setLoading(false)

      setTimeout(() => {
        form.reset()
        back()
      }, 500)
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

  const onDrop = (acceptedBlob) => {
    const file = acceptedBlob[0]

    const blobizeInMB = Number(file.size / 1024 / 1024).toFixed(2)

    if (file.size > 10000000) {
      toast({
        title: 'File size is too large',
        description: `Expected file size is at most 10MB, but got ${blobizeInMB}MB`,
        status: 'error',
        duration: 5000,
      })
      return
    }

    setBlob(acceptedBlob)

    form.setValue('file', acceptedBlob[0])
  }

  const handleRemoveFile = (path) => {
    setBlob(blob.filter((file) => file.path !== path))
  }

  const handleAdd = () => {
    append('')
  }

  const isBasicInput = (key) =>
    key !== 'file' &&
    key !== 'listProjectMember' &&
    key !== 'nationality' &&
    key !== 'whereDoYouKnow'

  useEffect(() => {
    append('')
  }, [])

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
                      className="text-xs text-white md:text-base"
                      type={key === 'email' ? 'email' : 'text'}
                      placeholder={capitalize(field.name)}
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
                {key === 'whereDoYouKnow' && (
                  <Combobox
                    name={capitalize(field.name)}
                    items={whereDoYouKnowOptions}
                    onSelect={(value) => {
                      form.setValue('whereDoYouKnow', value)
                    }}
                  />
                )}
                {key === 'listProjectMember' && (
                  <div className="scrollbar-hide relative flex h-auto max-h-[150px] w-full flex-col space-y-3 overflow-x-hidden overflow-y-scroll">
                    {fields.map((item, index) => (
                      <Fragment key={item.id}>
                        <div className="flex items-center space-x-2">
                          <Input
                            className="text-xs text-white md:text-base"
                            type="text"
                            placeholder={capitalize(field.name)}
                            {...form.register(
                              `listProjectMember.${index}.member`,
                            )}
                          />

                          {fields.length > 1 && (
                            <TrashIcon
                              onClick={() => remove(index)}
                              className="h-8 w-9 rounded-full bg-red-500 p-1.5 text-white"
                            />
                          )}
                        </div>
                        {index === fields.length - 1 && (
                          <DrezzoButton
                            loading={loading}
                            borderClassName="w-full hover:scale-100"
                            type="button"
                            className="w-full text-sm md:text-base"
                            size="sm"
                            onClick={handleAdd}
                          >
                            Add
                          </DrezzoButton>
                        )}
                      </Fragment>
                    ))}
                  </div>
                )}
                {key === 'file' && (
                  <MultipleUploader
                    accept="*"
                    onDrop={onDrop}
                    files={blob}
                    handleRemoveFile={handleRemoveFile}
                    maxFiles={1}
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
