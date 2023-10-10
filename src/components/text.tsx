interface TextProps {
  children: React.ReactNode
  aling?: 'left' | 'center' | 'right'
  color?: `#${string}`
  component?: React.ElementType
}

export function Text ({ component = 'span', aling, color, children }: TextProps) {
  const Component = component
  let _aling = 'text-left'
  if (aling === 'right') _aling = 'text-right'
  if (aling === 'center') _aling = 'text-center'
  let classI = ''
  const stylesI = {
    fontSize: 'var(--text-size)'
  }
  if (color !== undefined) {
    Object.assign(stylesI, { color })
  } else {
    classI = 'text-[#767676]'
  }
  // text-[0.73em]
  return (
    <Component style={stylesI} className={`${classI} font-[450] ${_aling}`}>
      {children}
    </Component>
  )
}
