import { ProgressBarItem } from './progress-bar-item'

export interface LanguageItemProps {
  language: string
  percentage: number
}

export function LanguageItem ({ language, percentage }: LanguageItemProps) {
  return (
    <ProgressBarItem label={language} percentage={percentage} />
  )
}
