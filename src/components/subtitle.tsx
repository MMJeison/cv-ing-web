interface SubtitleProps {
  children: React.ReactNode
  aling?: 'left' | 'center' | 'right'
  component?: React.ElementType
}

export function Subtitle ({ component = 'span', aling, children }: SubtitleProps) {
  const Component = component
  let _aling = 'text-left'
  if (aling === 'right') _aling = 'text-right'
  if (aling === 'center') _aling = 'text-center'
  return (
    <Component className={`text-[#121212] text-[50%] font-bold ${_aling}`}>
      {children}
    </Component>
  )
}
