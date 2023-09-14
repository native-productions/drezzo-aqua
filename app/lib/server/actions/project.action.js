'use server'

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { put } from '@vercel/blob'
import { prisma } from '../prisma'

export const submitProject = async (formData, fileName) => {
  const blob = formData.get('file')

  const newBlob = await put(fileName, blob, {
    access: 'public',
  })

  console.log('@newBlob _<', newBlob, '>_')

  const data = {
    projectName: formData.get('projectName'),
    members: JSON.parse(formData.get('listProjectMember')),
    nationality: formData.get('nationality'),
    email: formData.get('email'),
    telegram: formData.get('telegram'),
    whereDoYouKnow: formData.get('whereDoYouKnow'),
    projectFilePath: newBlob.url,
  }

  const newProject = await prisma.projects.create({
    data,
  })

  console.log('@newProject _<', newProject, '>_')
}
