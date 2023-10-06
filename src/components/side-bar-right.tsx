import { IconLink } from './icons'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { Subtitle } from './subtitle'

interface SideBarRightProps {
  top: number
  height: number
}

export function SideBarRight ({ top, height }: SideBarRightProps) {
  return (
    <aside style={{
      top: top + 'px',
      height: height + 'px'
    }} className="sticky top-0 bg-white w-[5%] flex flex-col items-center py-4 gap-2">
      <Subtitle>Links</Subtitle>
      <IconLink icon={<FaFacebookF className='w-full h-full'/>} />
      <IconLink icon={<AiFillInstagram className='w-full h-full'/>} />
      <IconLink icon={<FaTwitter className='w-full h-full'/>} />
      <IconLink icon={<FaLinkedinIn className='w-full h-full'/>} />
      <IconLink icon={<FaYoutube className='w-full h-full'/>} />
      <IconLink icon={<FaDribbble className='w-full h-full'/>} />
    </aside>
  )
}
