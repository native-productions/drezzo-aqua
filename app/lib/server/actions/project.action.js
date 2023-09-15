'use server'

/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { put } from '@vercel/blob'
import { prisma } from '../prisma'

export const submitProject = async (formData, fileName) => {
  const blob = formData.get('file')

  const data = {
    projectName: formData.get('projectName'),
    members: JSON.parse(formData.get('listProjectMember')),
    nationality:
      formData.get('nationality') === 'undefined'
        ? null
        : formData.get('nationality'),
    email: formData.get('email') === 'undefined' ? null : formData.get('email'),
    telegram:
      formData.get('telegram') === 'undefined'
        ? null
        : formData.get('telegram'),
    whereDoYouKnow: formData.get('whereDoYouKnow'),
  }
  console.log('@data _<', data, '>_')

  const newProject = await prisma.projects.create({
    data,
  })
  console.log('@newProject _<', newProject, '>_')

  const newBlob = await put(fileName, blob, {
    access: 'public',
  })
  console.log('@newBlob _<', newBlob, '>_')

  const updated = await prisma.projects.update({
    where: {
      id: newProject.id,
    },
    data: {
      file: {
        create: {
          fileName: newBlob.pathname,
          url: newBlob.url,
        },
      },
    },
  })
  console.log('@updated _<', updated, '>_')

  return updated
}
