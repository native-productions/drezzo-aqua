'use client'

import { Card } from '@/components/ui/card'
import { XMarkIcon } from '@heroicons/react/20/solid'
import SubmitForm from './submit-form'
import Title from './title'

function SubmitModal({ onClose }) {
  return (
    <Card className="h-screen border-none bg-border-blue-linear-gradient p-[3px]">
      <Card className="scrolbar-hide h-full overflow-y-scroll border-none bg-[#111827] p-6 text-[#8A939E]">
        <header className="mb-4 space-y-1 md:mb-8">
          <div className="flex w-full justify-end">
            <XMarkIcon
              onClick={onClose}
              className="h-6 w-6 cursor-pointer rounded-full bg-[#ffffff31] p-1 text-white md:h-8 md:w-8"
            />
          </div>
          <Title
            className="w-full text-center text-lg text-white md:text-2xl"
            withoutDropShadow
          >
            submit form
          </Title>
          <p className="w-full text-center text-sm md:text-base">
            {`Don't`} miss out on discovering what lies within
          </p>
        </header>
        <SubmitForm />
      </Card>
    </Card>
  )
}

export default SubmitModal
