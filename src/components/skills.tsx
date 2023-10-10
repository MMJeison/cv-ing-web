import { SideBarSection } from './sbl-section'
import { SkillItem, type SkillItemProps } from './skill-item'
import { Subtitle } from './subtitle'

const skills: SkillItemProps[] = [
  { skill: 'Bootstrap, Materialize' },
  { skill: 'React, Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Node.js, Express.js' }
]

export function Skills () {
  const myvar = "test";
  return (
    <SideBarSection>
      <Subtitle>Estra Skills</Subtitle>
      {skills.map((skill, _) => (
        <SkillItem key={skill.skill} skill={skill.skill} />
      ))}
    </SideBarSection>
  )
}
