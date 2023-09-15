import { cn, createDropshadow } from '@/lib/utils/view'
import { fontBungee } from '@/styles/fonts'
import React from 'react'

function Title({ children, withoutDropShadow = false, ...props }) {
  return (
    <h1
      {...props}
      style={{
        textShadow: !withoutDropShadow && createDropshadow('#ffb0d9'),
        ...props.style,
      }}
      className={cn(
        'pt-1.5 text-2xl text-[#FFB0F6] md:text-5xl',
        props.className,
        fontBungee.base.className,
      )}
    >
      {children}
    </h1>
  )
}

export default Title
