import { IconLink } from './icons'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { Subtitle } from './subtitle'

export function SideBarRight () {
  return (
    <aside className="sticky top-0 h-screen bg-white w-[6%] flex flex-col items-center gap-2 py-3">
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
