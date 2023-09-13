import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils/view'

function DrezzoButton({ children, ...props }) {
  return (
    <div className="w-max rounded-lg bg-border-blue-linear-gradient p-0.5 transition-all hover:scale-105">
      <Button
        {...props}
        className={cn('bg-blue-linear-gradient', props.className)}
      >
        {children}
      </Button>
    </div>
  )
}

export default DrezzoButton
