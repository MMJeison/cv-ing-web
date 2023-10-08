interface SubtitleProps {
  children: React.ReactNode
  aling?: 'left' | 'center' | 'right'
  color?: `#${string}`
  component?: React.ElementType
}

export function Subtitle ({ component = 'span', aling, color, children }: SubtitleProps) {
  const Component = component
  let _aling = 'text-left'
  if (aling === 'right') _aling = 'text-right'
  if (aling === 'center') _aling = 'text-center'
  let classI = ''
  const stylesI = {
    fontSize: 'var(--subtitle-size)'
  }
  if (color !== undefined) {
    Object.assign(stylesI, { color })
  } else {
    classI = 'text-[#121212]'
  }
  // text-[0.9em]
  return (
    <Component style={stylesI} className={`${classI} font-medium ${_aling}`}>
      {children}
    </Component>
  )
}
