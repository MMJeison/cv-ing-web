import { Subtitle } from './subtitle'
import { SideBarSection } from './sbl-section'
import { LanguageItem, type LanguageItemProps } from './laguage-item'

interface LanguagesProps {
  label: string
  languages: LanguageItemProps[]
}

export function Languages ({ label, languages }: LanguagesProps) {
  return (
    <SideBarSection>
      <Subtitle>{label}</Subtitle>
      {languages.map((language, index) => (
        <LanguageItem key={language.language} {...language} />
      ))}
    </SideBarSection>
  )
}
