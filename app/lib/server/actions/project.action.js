'use server'

/* eslint-disable import/prefer-default-export */

import { prisma } from '../prisma'

export const submitProject = async (formData) => {
  const filePath = 'https://example.com/file.jpg'

  const data = {
    projectName: formData.get('projectName'),
    // members: formData.get('listProjectMember'),
    members: JSON.parse(formData.get('listProjectMember')),
    nationality: formData.get('nationality'),
    email: formData.get('email'),
    telegram: formData.get('telegram'),
    whereDoYouKnow: formData.get('whereDoYouKnow'),
    projectFilePath: filePath,
  }

  await prisma.projects.create({
    data,
  })
}
