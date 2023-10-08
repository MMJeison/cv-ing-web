import { Divider } from './divider'
import { Text } from './text'

interface ProgressBarProps {
  label: string
  percentage: number
  color?: `#${string}` | `${string}`
}

export function ProgressBarItem ({ label, percentage }: ProgressBarProps) {
  return (
    <div className='w-full py-[0.03em]'>
      <div className='w-full flex justify-between'>
        <Text>{label}</Text>
        <Text>{percentage}%</Text>
      </div>
      <div className={`w-full rounded-full bg-white border-[1px] border-[#FFB400] p-[1px]`}>
        <Divider height='2px' width={`${percentage}%`} color='#FFB400' rounded/>
      </div>
    </div>
  )
}
