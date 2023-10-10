import { Divider } from './divider'
import { SideBarSection } from './sbl-section'
import { PersonalInfo } from './personal-info'
import { Subtitle } from './subtitle'
import { Text } from './text'
import { Skills } from './skills'
import { Languages } from './languages'
import { type LanguageItemProps } from './laguage-item'

const languages: LanguageItemProps[] = [
  { language: 'English', percentage: 70 },
  { language: 'Spanish', percentage: 100 }
]

const programingLanguages: LanguageItemProps[] = [
  { language: 'HTML', percentage: 90 },
  { language: 'CSS', percentage: 90 },
  { language: 'JavaScript', percentage: 95 },
  { language: 'Java', percentage: 70 },
  { language: 'C#', percentage: 50 }
]

export function SideBarLeft () {
  return (
    <aside className="fixed top-0 left-0 h-screen bg-white w-[20%] flex flex-col items-center gap-[0.6%] py-[1em] px-[0.7%]">
      <SideBarSection>
        <div className='relative w-[70%] mx-auto'>
          <img
            src="/images/profile.jpg"
            alt="Next.js logo"
            className="w-full aspect-square object-cover bg-center rounded-full"
          />
          <span className="absolute bottom-[9%] right-[9%] bg-[#7eb942] rounded-full w-[12%] aspect-square" />
        </div>
        <div className="w-[70%] flex flex-col items-center mt-[1%] mb-[0.5%] mx-auto">
          <Subtitle>Jeison Moncayo</Subtitle>
          <Text>Front-End Developer</Text>
        </div>
      </SideBarSection>
      <Divider width='80%'/>
      <PersonalInfo />
      <Divider width='80%'/>
      <Languages label='Languages' languages={languages}/>
      <Divider width='80%'/>
      <Languages label='Programming Languages' languages={programingLanguages}/>
      <Divider width='80%'/>
      <Skills />
      <Divider width='80%'/>
    </aside>
  )
}
