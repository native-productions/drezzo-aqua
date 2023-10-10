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

  const data = {
    projectName: datas.projectName,
    picName: datas.picName,
    typeOfIdentity: datas.typeOfIdentity,
    identityNumber: datas.identityNumber,
    nationality: datas.nationality === undefined ? null : datas.nationality,
    email: datas.email === undefined ? null : datas.email,
    telegram: datas.telegram === undefined ? null : datas.telegram,
    category: datas.category,
    whereDoYouKnow: datas.whereDoYouKnow,
    isAgree: datas.agreement === 'true',
  }
  const newProject = await prisma.projects.create({
    data: {
      ...data,
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

  // // Update the uploaded file
  // const updated = await prisma.projects.update({
  //   where: {
  //     id: newProject.id,
  //   },
  //   data: {
  //     file: {
  //       createMany: {
  //         data: [
  //           {
  //             fileName: newProposalBlob.pathname,
  //             url: newProposalBlob.url,
  //             type: 'proposal',
  //           },
  //           {
  //             fileName: newFileBlob.pathname,
  //             url: newFileBlob.url,
  //             type: 'assets',
  //           },
  //         ],
  //       },
  //     },
  //   },
  // })
  // console.log('@updated _<', updated, '>_')

  return newProject
}
