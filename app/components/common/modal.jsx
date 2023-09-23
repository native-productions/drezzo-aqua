'use client'

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import { EyeClosedIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils/view'
import { XMarkIcon } from '@heroicons/react/20/solid'

function BaseModal({
  open = false,
  onClose,
  disabled,
  title,
  headerClassName,
  withoutHeader = false,
  ...props
}) {
  const animation = useSpring({
    // display: open ? 'flex' : 'none',
    translateY: open ? '0%' : '-100%',
    opacity: open ? 1 : 0,
    backdropFilter: open ? 'blur(10px)' : 'blur(0px)',
    delay: 100,
  })

  const modalAnimation = useSpring({
    scale: open ? 1 : 0.2,
    opacity: open ? 1 : 0,
    backdropFilter: open ? 'blur(5px)' : 'blur(0px)',
    delay: 250,
  })

  return (
    <animated.aside
      {...props}
      style={{ ...animation, zIndex: 50 }}
      className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center overflow-y-scroll bg-black/70 xl:px-0"
      id="modal"
    >
      <animated.div
        style={modalAnimation}
        className={cn(
          'z-50 h-max w-full max-w-lg rounded-xl bg-transparent text-base text-[#2d2b2b]',
          props.className,
        )}
      >
        {!withoutHeader && (
          <header
            className={cn(
              'bg-accent-dark flex w-full items-center justify-between rounded-t-xl p-1.5',
              headerClassName,
            )}
          >
            <button
              type="button"
              disabled={disabled}
              onClick={onClose}
              className="mx-auto my-0.5 rounded-full bg-red-500 p-1.5 disabled:bg-gray-400"
            >
              <XMarkIcon onClick={onClose} className="h-4 w-4 text-white" />
            </button>
            <h1 className="text-sm font-semibold">{title}</h1>
            <button
              type="button"
              className="rounded-full bg-transparent p-0.5 disabled:bg-gray-400"
            >
              <EyeClosedIcon
                onClick={onClose}
                className="h-3 w-3 text-transparent"
              />
            </button>
          </header>
        )}
        {props?.children}
      </animated.div>
    </animated.aside>
  )
}

export default BaseModal
