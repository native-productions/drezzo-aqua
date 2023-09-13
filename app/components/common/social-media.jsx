import Image from 'next/image'

const socialMedia = [
  {
    id: 1,
    name: 'instagram',
    url: '',
    icon: '/svgs/instagram.svg',
  },
  {
    id: 2,
    name: 'tiktok',
    url: '',
    icon: '/svgs/tiktok.svg',
  },
  {
    id: 3,
    name: 'x',
    url: '',
    icon: '/svgs/x.svg',
  },
  {
    id: 4,
    name: 'facebook',
    url: '',
    icon: '/svgs/facebook.svg',
  },
  {
    id: 5,
    name: 'telegram',
    url: '',
    icon: '/svgs/telegram.svg',
  },
]

export default function SocialMedia() {
  return (
    <div className="flex items-center justify-center space-x-6">
      {socialMedia.map((item) => (
        <button type="button" key={item.id}>
          <Image src={item.icon} width={50} height={50} alt={item.name} />
        </button>
      ))}
    </div>
  )
}
