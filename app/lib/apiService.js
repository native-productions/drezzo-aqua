import { upload } from '@vercel/blob/client'

export default async function uploadBlob(projectId, { proposal, fileZip }) {
  const proposalBlob = proposal
  const newProposalBlob = await upload(proposalBlob.name, proposalBlob, {
    access: 'public',
    handleUploadUrl: '/api/blob',
    clientPayload: {
      fileName: proposalBlob.name,
      projectId,
      type: 'proposal',
    },
  })

  const file = fileZip
  const newBlob = await upload(file.name, file, {
    access: 'public',
    handleUploadUrl: '/api/blob',
    clientPayload: {
      fileName: file.name,
      projectId,
      type: 'assets',
    },
  })

  return {
    proposal: newProposalBlob,
    file: newBlob,
  }
}
