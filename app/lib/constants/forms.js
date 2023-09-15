/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import * as z from 'zod'

const fileSchema = z
  .custom((value) => value instanceof File, {
    message: 'File must be a File object',
  })
  .refine(
    (value) => {
      const allowedExtensions = ['jpg', 'png', 'gif']
      const extension = value.name.split('.').pop()

      return allowedExtensions.includes(extension)
    },
    {
      message: 'File must be a JPG, PNG, or GIF',
    },
  )

export const projectFormSchema = z.object({
  projectName: z
    .string()
    .min(2, {
      message: 'Project name must be at least 2 characters',
    })
    .max(50, {
      message: 'Project name must be at most 50 characters',
    }),
  listProjectMember: z.any(),
  nationality: z.optional(z.string()),
  email: z.optional(
    z.string().email({
      message: 'Invalid email address',
    }),
  ),
  telegram: z.optional(z.string().min(2).max(50)),
  whereDoYouKnow: z.optional(z.string()),
  file: fileSchema,
})

export const whereDoYouKnowOptions = [
  {
    label: 'Instagram',
    value: 'instagram',
  },
  {
    label: 'X',
    value: 'x',
  },
  {
    label: 'Facebook',
    value: 'facebook',
  },
  {
    label: 'Tiktok',
    value: 'tiktok',
  },
  {
    label: 'Telegram',
    value: 'telegram',
  },
  {
    label: 'Friends',
    value: 'friends',
  },
  {
    label: 'Other',
    value: 'other',
  },
]
