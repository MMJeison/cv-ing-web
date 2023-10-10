import { Subtitle } from './subtitle'
import { Text } from './text'

interface EducationCardProps {
  institution: string
  date: string
  title: string
  description: string
}

export function EducationCard ({ institution, date, title, description }: EducationCardProps) {
  return (
    <div className="flex gap-[2%] py-2">
      <div className="w-[40%] flex flex-col justify-start items-start gap-2">
        <Subtitle>{institution}</Subtitle>
        <div className='flex gap-3 items-center'>
          <Text color='#2B2B2B'>Student</Text>
          <span style={{ fontSize: 'var(--text-size)' }} className='text-white bg-[#FFB400] h-[1.6em] px-1 rounded-[1px] flex items-center'>{date}</span>
        </div>
      </div>
      <div className="w-[58%] flex flex-col justify-start items-start gap-3">
        <Subtitle>{title}</Subtitle>
        <Text>{description}</Text>
      </div>
    </div>
  )
}
