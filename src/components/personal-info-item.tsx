import { Text } from './text'

export interface PersonalInfoItemProps {
  label: string
  value: string
  colorValue?: `#${string}`
}

export function PersonalInfoItem ({ label, value, colorValue }: PersonalInfoItemProps) {
  return (
    <div className='flex justify-between items-center'>
      <Text color='#2B2B2B'>{label}:</Text>
      <Text color={colorValue ?? '#2B2B2B'}>{value}</Text>
    </div>
  )
}
