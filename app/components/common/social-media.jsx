import Image from 'next/image'

const socialMedia = [
  {
    id: 1,
    name: 'instagram',
    url: 'https://www.instagram.com/drezzo.io/',
    icon: '/svgs/instagram.svg',
  },
  {
    id: 2,
    name: 'tiktok',
    url: 'https://www.tiktok.com/@drezzo.io',
    icon: '/svgs/tiktok.svg',
  },
  {
    id: 3,
    name: 'x',
    url: 'https://twitter.com/Drezzo_io',
    icon: '/svgs/x.svg',
  },
  {
    id: 4,
    name: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=100088567615028',
    icon: '/svgs/facebook.svg',
  },
  {
    id: 5,
    name: 'telegram',
    url: 'https://t.me/drezzoofficial',
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
