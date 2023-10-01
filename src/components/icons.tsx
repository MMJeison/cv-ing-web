interface IconLinkProps {
  icon: React.ReactNode
  bgcolor?: `#${string}`
  link?: string
}

export function IconLink ({ icon, bgcolor, link = '#' }: IconLinkProps) {
  return (
    <a href={link} rel="noreferrer" target='_blank' className={`p-2 w-7 h-7 ${!bgcolor && 'bg-[#FFB400]'} rounded-full`}>
      {icon}
    </a>
  )
}
