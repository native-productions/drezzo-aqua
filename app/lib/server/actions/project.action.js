'use server'

/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { prisma } from '../prisma'

export const submitProject = async (datas) => {
  const newProject = await prisma.projects.create({
    data: datas,
  })
  console.log('@newProject _<', newProject, '>_')

  return newProject
}
