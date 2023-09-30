interface TextProps {
  children: React.ReactNode
  aling?: 'left' | 'center' | 'right'
  component?: React.ElementType
}

export function Text ({ component = 'span', aling, children }: TextProps) {
  const Component = component
  let _aling = 'text-left'
  if (aling === 'right') _aling = 'text-right'
  if (aling === 'center') _aling = 'text-center'
  return (
    <Component className={`text-[#4f4f4f] text-[10px] text-center ${_aling}`}>
      {children}
    </Component>
  )
}
