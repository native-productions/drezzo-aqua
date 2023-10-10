'use server'

/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { put } from '@vercel/blob'
import { prisma } from '../prisma'

export const submitProject = async (
  datas,
  formData,
  proposalFileName,
  fileName,
) => {
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

  const newProject = await prisma.projects.create({
    data: {
      ...datas,
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
    include: {
      file: true,
    },
  })
  console.log('@newProject _<', newProject, '>_')

  return newProject
}
