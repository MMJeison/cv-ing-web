interface IconLinkProps {
  icon: React.ReactNode
  bgcolor?: `#${string}`
  link?: string
}

export function IconLink ({ icon, bgcolor, link = '#' }: IconLinkProps) {
  let bgcol = ''
  const styles = {}
  if (bgcolor) {
    Object.assign(styles, { backgroundColor: bgcolor })
  } else {
    bgcol = 'bg-[#FFB400]'
  }

  return (
    <a href={link} rel="noreferrer" target='_blank'
      className={`p-[10%] w-[50%] aspect-square ${bgcol} rounded-full`}
      style={styles}
      >
      {icon}
    </a>
  )
}
