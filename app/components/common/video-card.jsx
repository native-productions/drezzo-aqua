'use client'

/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils/view'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { HeartFilledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

function VideoCard({ playable = false, modalOpen = false }) {
  const [showVideo, setShowVideo] = React.useState(false)
  const videoRef = React.useRef(null)

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

    if (videoRef?.current?.readyState === 1) {
      setShowVideo(true)
    }

    console.log('@videoReadyState =>', video.readyState) // Remove this

    return () => {
      video.currentTime = 2
    }
  }, [playable, modalOpen])

  return (
    <Card
      className={cn(
        'relative grid place-content-center overflow-hidden rounded-3xl border-none',
        showVideo || playable
          ? 'h-full w-full opacity-100 md:max-h-[465px]'
          : 'h-56 md:h-[465px] md:animate-pulse',
      )}
    >
      <video
        className={cn(
          'relative z-30 rounded-md',
          !showVideo && 'animate-pulse',
        )}
        onCanPlay={(e) => {
          if (!showVideo) {
            e.target.currentTime = 2
            setShowVideo(true)
          }
        }}
        ref={videoRef}
        controls={playable}
        id="teaser-video"
      >
        <source
          src="https://storage.googleapis.com/drezzo/videos/VIDEO%20PROFIL%20DREZZO.mp4"
          type="video/mp4"
        />
      </video>
      <Image
        src="/images/thumbnail.jpg"
        alt="Teaser Poster"
        layout="fill"
        objectFit="cover"
        className="absolute z-20"
      />
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
