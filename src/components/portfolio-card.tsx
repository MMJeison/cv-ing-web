import { Text } from './text'
import { Subtitle } from './subtitle'
import { MdOutlineChevronRight } from 'react-icons/md'

interface PortfolioCardProps {
  img: string
  title: string
  description: string
}

export function PortfolioCard ({ img, title, description }: PortfolioCardProps) {
  return (
    <div className='min-w-[35%] bg-white'>
      <div className='w-full bg-[#F6F6F6] rounded-lg flex justify-center items-center'>
        <img src={img} alt={title} className='w-full aspect-square object-cover' />
      </div>
      <div className='w-full flex flex-col gap-2 p-4'>
        <Subtitle>{title}</Subtitle>
        <Text>{description}</Text>
        <button className='flex items-center text-[#FFB400]'>
          <Subtitle color='#FFB400'>Learn More</Subtitle>
          <MdOutlineChevronRight />
        </button>
      </div>
    </div>
  )
}
