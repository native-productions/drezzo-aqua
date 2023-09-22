/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import * as z from 'zod'

const fileSchema = z
  .custom((value) => value instanceof File, {
    message: 'File must be a File object',
  })
  .refine(() => true, {
    message: 'File must be a valid file type',
  })

export const projectFormSchema = z.object({
  projectName: z
    .string()
    .min(2, {
      message: 'Project name must be at least 2 characters',
    })
    .max(50, {
      message: 'Project name must be at most 50 characters',
    }),
  picName: z
    .string()
    .min(2, {
      message: 'PIC name must be at least 2 characters',
    })
    .optional(),
  typeOfIdentitiy: z.optional(z.string()),
  identityNumber: z.optional(z.string()),
  nationality: z.optional(z.string()),
  email: z.optional(
    z.string().email({
      message: 'Invalid email address',
    }),
  ),
  telegram: z.optional(z.string().min(2).max(50)),
  whereDoYouKnow: z.optional(z.string()),
  proposal: fileSchema,
  file: fileSchema,
  agreement: z.optional(z.boolean()),
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
