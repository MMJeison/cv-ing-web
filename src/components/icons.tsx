interface CustomIconProps {
  icon: React.ReactNode
  bgcolor?: `#${string}`
}

export function CustomIcon ({ icon, bgcolor }: CustomIconProps) {
  return (
    <div className={`p-2 w-7 h-7 ${!bgcolor && 'bg-[#FFB400]'} rounded-full`}>
      {icon}
    </div>
  )
}
