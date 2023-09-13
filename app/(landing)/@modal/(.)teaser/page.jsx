'use client'

import React from 'react'
import Modal from '@/components/common/modal'
import VideoCard from '@/components/common/video-card'
import { useRouter, usePathname } from 'next/navigation'

function InterceptTeaser() {
  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const open = isOpen && pathname.includes('teaser')

  const handleClose = () => {
    setIsOpen(false)
    router.push('/')
  }

  React.useEffect(() => {
    if (pathname.includes('teaser')) {
      setIsOpen(true)
    }
  }, [pathname])

  return (
    <Modal open={open} onClose={handleClose} className="max-w-6xl">
      <VideoCard playable modalOpen={open} />
    </Modal>
  )
}

export default InterceptTeaser
