interface DividerProps {
  color?: `#${string}`
  height?: `${number}px` | `${number}%` | `${number}rem` | `${number}em`
  margin?: `${number}px` | `${number}%` | `${number}rem` | `${number}em`
  width?: 'auto' | `${number}%` | `${number}px` | `${number}rem` | `${number}em`
  rounded?: boolean
}

export function Divider ({ color, height, width, margin, rounded = false }: DividerProps) {
  const styles = {}
  if (height) Object.assign(styles, { height })
  if (width) Object.assign(styles, { width })
  if (margin) Object.assign(styles, { margin })
  if (color) Object.assign(styles, { backgroundColor: color })

  return <div className={`${!width && 'w-full'} ${rounded && 'rounded-full'}`}>
    <div
      className={`w-auto ${!height && 'h-[1px]'} ${!color && 'bg-gray-500'} ${rounded && 'rounded-full'}`}
      style={styles}
    />
  </div>
}
