'use client'

/* eslint-disable jsx-a11y/media-has-caption */

import React, { useRef } from 'react'
import Link from 'next/link'
import { HeartFilledIcon, PauseIcon, PlayIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils/view'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function VideoCard({ playable = false, modalOpen = false }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = React.useState(false)

  const handlePlay = () => {
    videoRef.current.play()
    setPlaying(true)
  }

  const handlePause = () => {
    videoRef.current.pause()
    setPlaying(false)
  }

  React.useEffect(() => {
    const video = videoRef.current

    if (playable && modalOpen) {
      video.currentTime = 0
      handlePlay()
    } else {
      handlePause()
      video.currentTime = 2
    }

    return () => {
      video.currentTime = 2
    }
  }, [playable, modalOpen])

  return (
    <Card
      className={cn(
        'relative grid place-content-center overflow-hidden rounded-3xl border-none',
        playable ? 'h-full w-full' : 'max-h-[465px]',
      )}
    >
      <video
        onPlaying={() => setPlaying(true)}
        onEnded={() => setPlaying(false)}
        className="relative z-30 rounded-md bg-red-200"
        ref={videoRef}
        controls={playable}
      >
        <source src="/video/teaser.mp4" type="video/mp4" />
      </video>
      {!playable && (
        <Button className="absolute bottom-5 left-5 z-40 rounded-full bg-transparent text-white backdrop-blur-lg">
          <Link href="/teaser" className="flex items-center space-x-2">
            <HeartFilledIcon className="h-4 w-4" />
            <span>Play Teaser</span>
          </Link>
        </Button>
      )}
    </Card>
  )
}

export default VideoCard
