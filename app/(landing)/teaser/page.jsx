import VideoCard from '@/components/common/video-card'

export const metadata = {
  title: 'Drezzo x Aqua | Teaser',
  description: 'Drezzo x Aqua is bla bla bla',
}

function TeaserPage() {
  return (
    <>
      <VideoCard playable modalOpen />
      <br />
      <br />
    </>
  )
}

export default TeaserPage
