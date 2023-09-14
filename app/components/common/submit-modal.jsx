'use client'

import { Card } from '@/components/ui/card'
import { XMarkIcon } from '@heroicons/react/20/solid'
import SubmitForm from './submit-form'
import Title from './title'

function SubmitModal({ onClose }) {
  return (
    <Card className="rounded-2xl border-none bg-border-blue-linear-gradient p-[3px]">
      <Card className="border-none bg-[#111827] p-6 text-[#8A939E]">
        <header className="mb-8 space-y-1">
          <div className="flex w-full justify-end">
            <XMarkIcon
              onClick={onClose}
              className=" h-8 w-8 cursor-pointer rounded-full bg-[#ffffff31] p-1 text-white"
            />
          </div>
          <Title
            className="w-full translate-x-4 text-center text-2xl text-white"
            withoutDropShadow
          >
            submit form
          </Title>
          <p className="w-full text-center text-base">
            {`Don't`} miss out on discovering what lies within
          </p>
        </header>
        <SubmitForm />
      </Card>
    </Card>
  )
}

export default SubmitModal
