import { CustomIcon } from './icons'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { Subtitle } from './subtitle'

export function SideBarRight () {
  return (
    <aside className="bg-white w-[6%] flex flex-col items-center gap-2 py-3">
      <Subtitle>Links</Subtitle>
      <CustomIcon icon={<FaFacebookF className='w-full h-full'/>} />
      <CustomIcon icon={<AiFillInstagram className='w-full h-full'/>} />
      <CustomIcon icon={<FaTwitter className='w-full h-full'/>} />
      <CustomIcon icon={<FaLinkedinIn className='w-full h-full'/>} />
      <CustomIcon icon={<FaYoutube className='w-full h-full'/>} />
      <CustomIcon icon={<FaDribbble className='w-full h-full'/>} />
    </aside>
  )
}
