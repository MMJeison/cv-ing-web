import { useState } from 'react'
import { Text } from './text'
import { Subtitle } from './subtitle'
import { MdOutlineChevronRight } from 'react-icons/md'
import { PortfolioPopUp } from './portfolio-pop-up'

export interface PortfolioCardProps {
  img: string
  title: string
  shortDescription: string
  fullDescription: string
  repoLink: string
}

export function PortfolioCard ({ img, title, shortDescription, fullDescription, repoLink }: PortfolioCardProps) {
  const [showPopUp, setShowPopUp] = useState(false)
  const togglePopUp = () => { setShowPopUp(!showPopUp) }
  const data = { img, title, shortDescription, fullDescription, repoLink }
  return (
    <div className='min-w-[35%] w-[35%] bg-white'>
      <PortfolioPopUp show={showPopUp} setShow={setShowPopUp} data={data} />
      <div className='w-full bg-[#F6F6F6] rounded-lg flex justify-center items-center'>
        <img src={img} alt={title} className='w-full aspect-video object-contain' />
      </div>
      <div className='w-full flex flex-col gap-2 p-4'>
        <Subtitle>{title}</Subtitle>
        <Text>{shortDescription}</Text>
        <button onClick={togglePopUp} className='flex items-center text-[#FFB400]'>
          <Subtitle color='#FFB400'>See More</Subtitle>
          <MdOutlineChevronRight />
        </button>
      </div>
    </div>
  )
}
