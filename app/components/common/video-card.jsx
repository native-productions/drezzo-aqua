'use client'

/* eslint-disable jsx-a11y/media-has-caption */

import React, { useRef } from 'react'
import Link from 'next/link'
import { HeartFilledIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils/view'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function VideoCard({ playable = false, modalOpen = false }) {
  const [showVideo, setShowVideo] = React.useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
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

    if (video.readyState === 1) {
      setShowVideo(true)
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
        showVideo && playable ? 'opacity-100' : 'h-[400px] animate-pulse',
      )}
    >
      <video
        // onPlaying={() => setPlaying(true)}
        // onEnded={() => setPlaying(false)}
        className="relative z-30 rounded-md"
        ref={videoRef}
        controls={playable}
      >
        <source
          src="https://storage.googleapis.com/drezzo/videos/VIDEO%20PROFIL%20DREZZO.mp4"
          type="video/mp4"
        />
      </video>
      {!playable && showVideo && (
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
