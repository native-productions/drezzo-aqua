'use server'

/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { put } from '@vercel/blob'
import { prisma } from '../prisma'

export const submitProject = async (formData, proposalFileName, fileName) => {
  const data = {
    projectName: formData.get('projectName'),
    picName: formData.get('picName'),
    typeOfIdentitiy: formData.get('typeOfIdentitiy'),
    identityNumber: formData.get('identityNumber'),
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

  // Upload file to vercel blob storage
  const proposalBlob = formData.get('proposal')
  const newProposalBlob = await put(proposalFileName, proposalBlob, {
    access: 'public',
  })
  console.log('@newProposalBlob _<', newProposalBlob, '>_')

  const fileBlob = formData.get('file')
  const newFileBlob = await put(fileName, fileBlob, {
    access: 'public',
  })
  console.log('@newFileBlob _<', newFileBlob, '>_')

  // Update the uploaded file
  const updated = await prisma.projects.update({
    where: {
      id: newProject.id,
    },
    data: {
      file: {
        createMany: {
          data: [
            {
              fileName: newProposalBlob.pathname,
              url: newProposalBlob.url,
              type: 'proposal',
            },
            {
              fileName: newFileBlob.pathname,
              url: newFileBlob.url,
              type: 'assets',
            },
          ],
        },
      },
    },
  })
  console.log('@updated _<', updated, '>_')

  return updated
}
