import { Text } from './text'

export interface PersonalInfoItemProps {
  label: string
  value: string
  link?: string
}

export function PersonalInfoItem ({ label, value, link }: PersonalInfoItemProps) {
  return (
    <div className='flex justify-between items-center'>
      <Text color='#2B2B2B'>{label}:</Text>
      {link
        ? (
        <a href={link} className='flex items-center'>
          <Text color='#7EB942'>{value}</Text>
        </a>
          )
        : (
        <Text color='#2B2B2B'>{value}</Text>
          )}
    </div>
  )
}
