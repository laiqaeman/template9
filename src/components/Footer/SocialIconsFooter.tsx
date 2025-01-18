import { Facebook, Twitter, Instagram, Youtube, PinIcon } from 'lucide-react'
import Link from "next/link"

export default function SocialIcons() {
  const icons = [
    { Icon: Facebook, color: 'text-[#1E1E1E]', url: "https://www.facebook.com" },
    { Icon: Twitter, color: 'text-[#1E1E1E]', url: 'https://twitter.com/your-profile' },
    { Icon: Instagram, color: 'text-[#1E1E1E]', url: "https://www.instagram.com" },
    { Icon: Youtube, color: 'text-[#FF9F0D]', url: 'https://www.youtube.com/channel/your-channel' },
    { Icon: PinIcon, color: 'text-[#1E1E1E]', url: 'https://www.pinterest.com/your-profile' },
  ]

  return (
    <div className="flex justify-center space-x-2 md:space-x-4">
      {icons.map(({ Icon, color, url }, index) => (
        <Link
          key={index}
          href={url}  // Set the social media URL here
          target="_blank"  // Open in a new tab
          className={`bg-white p-1.5 md:p-2 rounded ${color} hover:bg-[#FF9F0D] hover:text-white transition duration-300`}
        >
          <Icon size={16} />
        </Link>
      ))}
    </div>
  )
}
