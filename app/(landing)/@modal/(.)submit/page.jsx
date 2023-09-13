'use client'

import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import BaseModal from '@/components/common/modal'
import SubmitModal from '@/components/common/submit-modal'

function InterceptSubmitForm() {
  const [isOpen, setIsOpen] = React.useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const open = isOpen && pathname.includes('submit')

  const handleClose = () => {
    setIsOpen(false)
    router.push('/')
  }

  useEffect(() => {
    if (pathname.includes('submit')) {
      setIsOpen(true)
    }
  }, [pathname])

  return (
    <BaseModal withoutHeader open={open}>
      <SubmitModal onClose={handleClose} />
    </BaseModal>
  )
}

export default InterceptSubmitForm
