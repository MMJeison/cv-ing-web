import { AiOutlineBlock } from 'react-icons/ai'
import { Text } from './text'

export interface SkillItemProps {
  skill: string
}

export function SkillItem ({ skill }: SkillItemProps) {
  return (
    <div className='flex justify-start items-center gap-[2%] my-[0.8%]'>
      <AiOutlineBlock className='w-[1em] h-[1em] text-[#FFB400]' />
      <Text>{skill}</Text>
    </div>
  )
}
