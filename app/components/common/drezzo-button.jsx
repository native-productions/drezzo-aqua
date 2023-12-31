import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils/view'

function DrezzoButton({ children, borderClassName, loading, ...props }) {
  return (
    <div
      className={cn(
        'w-max rounded-lg bg-border-blue-linear-gradient p-0.5 transition-all hover:scale-105',
        borderClassName,
      )}
    >
      <Button
        {...props}
        disabled={loading}
        className={cn('bg-blue-linear-gradient', props.className)}
      >
        {loading ? 'Loading...' : children}
      </Button>
    </div>
  )
}

export default DrezzoButton
