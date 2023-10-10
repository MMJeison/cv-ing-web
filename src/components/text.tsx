interface TextProps {
  children: React.ReactNode
  align?: 'left' | 'center' | 'right'
  color?: `#${string}`
  component?: React.ElementType
}

export function Text ({ component = 'span', align, color, children }: TextProps) {
  const Component = component
  let _align = 'text-left'
  if (align === 'right') _align = 'text-right'
  if (align === 'center') _align = 'text-center'
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
    <Component style={stylesI} className={`${classI} font-[450] ${_align}`}>
      {children}
    </Component>
  )
}
