import { SideBarSection } from './sbl-section'
import { PersonalInfoItem, type PersonalInfoItemProps } from './personal-info-item'

const data: PersonalInfoItemProps[] = [
  {
    label: 'Age',
    value: '21'
  },
  {
    label: 'Residence',
    value: 'Medellin, Colombia'
  },
  {
    label: 'E-mail',
    value: 'jeisondmm29@gmail.com',
    link: 'mailto://jeisondmm29@gmail.com'
  },
  {
    label: 'Phone number',
    value: '+57 3137167437'
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
