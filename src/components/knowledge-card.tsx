import { Subtitle } from './subtitle'
import { Text } from './text'
import { HiOutlineChevronRight } from 'react-icons/hi'

interface KnowledgeCardProps {
  icon?: React.ReactNode
  title: string
  text: string
  btn?: string
}

export function KnowledgeCard ({ icon, title, text, btn }: KnowledgeCardProps) {
  return (
    <div className="bg-white flex flex-col justify-center items-center gap-1 w-[30%] h-[10em] min-w-[10em] p-4">
      {icon && <span className='w-[25%] aspect-square text-[#FFB400]'>
        {icon}
      </span>}
      <Subtitle>{title}</Subtitle>
      <Text aling='center'>{text}</Text>
      {btn && <button className='flex items-center gap-1 text-[#FFB400] rounded-sm py-1 px-2 text-[0.6em] font-bold'>
        <span>{btn}</span>
        <HiOutlineChevronRight />
      </button>}
    </div>
  )
}
