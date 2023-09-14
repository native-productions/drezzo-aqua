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
import { projectFormSchema } from '@/lib/constants/forms'
import { submitProject } from '@/lib/server/actions/project.action'
import { capitalize } from '@/lib/utils/view'
import { useState, useEffect, Fragment } from 'react'
import { TrashIcon } from '@radix-ui/react-icons'
import MultipleUploader from './multiple-uploader'
import DrezzoButton from './drezzo-button'
import { useToast } from '../ui/use-toast'

export default function SubmitForm() {
  const { toast } = useToast()
  const [files, setFiles] = useState([])
  const form = useForm({
    resolver: zodResolver(projectFormSchema),
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'listProjectMember',
  })

  const onSubmit = async (data) => {
    const members = data.listProjectMember.map((item) => item.member)
    const datas = { ...data, listProjectMember: members, file: files[0] }

    const formData = new FormData()

    Object.keys(datas).forEach((key) => {
      if (key === 'file') {
        formData.append(key, datas[key])
      } else {
        formData.append(key, JSON.stringify(datas[key]))
      }
    })

    try {
      await submitProject(formData)
      toast({
        title: 'Success',
        description: 'Project submitted successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      const errorUnique = error.message.includes('Unique')
      const errorEmail = error.message.includes('email')

      console.log(errorUnique, errorEmail)

      if (errorUnique && errorEmail) {
        toast({
          title: 'Error email',
          description: 'Email already exists',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
        return
      }

      toast({
        title: 'Error',
        description: 'Something went wrong',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles)
    form.setValue('file', acceptedFiles[0])
  }

  const handleRemoveFile = (path) => {
    setFiles(files.filter((file) => file.path !== path))
  }

  const handleAdd = () => {
    append('')
  }

  useEffect(() => {
    append('')
  }, [])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {Object.keys(projectFormSchema.shape).map((key) => (
          <FormField
            key={key}
            control={form.control}
            name={key}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  {key !== 'file' && key !== 'listProjectMember' && (
                    <Input
                      className="text-white"
                      type={key === 'email' ? 'email' : 'text'}
                      placeholder={capitalize(field.name)}
                      onChange={(e) => {
                        field.onChange(e.target.value)
                      }}
                    />
                  )}
                </FormControl>
                {key === 'listProjectMember' && (
                  <div className="relative flex h-auto max-h-[200px] w-full flex-col space-y-3 overflow-x-hidden overflow-y-scroll pr-4">
                    {fields.map((item, index) => (
                      <Fragment key={item.id}>
                        <div className="flex items-center space-x-2">
                          <Input
                            // key={item.id}
                            className="text-white"
                            type="text"
                            placeholder={capitalize(field.name)}
                            {...form.register(
                              `listProjectMember.${index}.member`,
                            )}
                          />

                          {fields.length > 2 && (
                            <TrashIcon
                              onClick={() => remove(index)}
                              className="h-8 w-9 rounded-full bg-red-500 p-1.5 text-white"
                            />
                          )}
                        </div>
                        {index === fields.length - 1 && (
                          <DrezzoButton
                            borderClassName="w-full hover:scale-100"
                            className="w-full"
                            type="button"
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
                    accept="jpg,png,gif"
                    onDrop={onDrop}
                    files={files}
                    handleRemoveFile={handleRemoveFile}
                    maxFiles={1}
                  />
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <DrezzoButton type="submit">Submit</DrezzoButton>
      </form>
    </Form>
  )
}
