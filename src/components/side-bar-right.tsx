import { IconLink } from './icons'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { Subtitle } from './subtitle'

export function SideBarRight () {
  return (
    <aside className="fixed top-0 right-0 h-screen bg-white w-[5%] flex flex-col items-center py-4 gap-2">
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
