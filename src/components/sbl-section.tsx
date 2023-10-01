interface SideBarSectionProps {
  children: React.ReactNode
}

export function SideBarSection ({ children }: SideBarSectionProps) {
  return (
    <section className="w-[75%] flex flex-col">
      {children}
    </section>
  )
}
