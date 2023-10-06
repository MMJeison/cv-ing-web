interface DividerProps {
  color?: `#${string}`
  height?: `${number}px` | `${number}%` | `${number}rem` | `${number}em`
  margin?: `${number}px` | `${number}%` | `${number}rem` | `${number}em`
  width?: 'auto' | `${number}%` | `${number}px` | `${number}rem` | `${number}em`
  rounded?: boolean
}

export function Divider ({ color, height, width, margin, rounded = false }: DividerProps) {
  let classW = ''
  let classI = 'w-auto h-[1px] bg-gray-300'
  const stylesW = {}
  const stylesI = {}
  if (width === undefined) {
    classW = 'w-full'
  } else {
    Object.assign(stylesW, { width })
  }
  if (rounded) {
    classW += ' rounded-full'
    classI += ' rounded-full'
  }
  if (height !== undefined) {
    Object.assign(stylesI, { height })
  }
  if (color !== undefined) {
    Object.assign(stylesI, { backgroundColor: color })
  }
  if (margin !== undefined) {
    Object.assign(stylesW, { margin })
  }

  return <div style={stylesW} className={classW}>
    <div
      className={classI}
      style={stylesI}
    />
  </div>
}
