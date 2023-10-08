import { SideBarSection } from './sbl-section'
import { PersonalInfoItem, type PersonalInfoItemProps } from './personal-info-item'

const data: PersonalInfoItemProps[] = [
  {
    label: 'Age',
    value: '25'
  },
  {
    label: 'Residence',
    value: 'BD'
  },
  {
    label: 'Freelance',
    value: 'Available',
    colorValue: '#7eb942'
  },
  {
    label: 'Address',
    value: 'Dhaka, Bangladesh'
  }
]

export function PersonalInfo () {
  return (
    <SideBarSection>
      {data.map((item, _) => (
        <PersonalInfoItem key={item.label} {...item} />
      ))}
    </SideBarSection>
  )
}
