import { SideBarSection } from './sbl-section'
import { SkillItem, type SkillItemProps } from './skill-item'
import { Subtitle } from './subtitle'

const skills: SkillItemProps[] = [
  { skill: 'Node.js, Express.js' },
  { skill: 'React, Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Bootstrap, MaterialUI' }
]

export function Skills () {
  return (
    <SideBarSection>
      <Subtitle>Extra Skills</Subtitle>
      {skills.map((skill, _) => (
        <SkillItem key={skill.skill} skill={skill.skill} />
      ))}
    </SideBarSection>
  )
}
