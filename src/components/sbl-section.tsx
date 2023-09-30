interface SideBarSectionProps {
  children: React.ReactNode
}

export function SideBarSection ({ children }: SideBarSectionProps) {
  return (
    <section className="w-[100%] flex flex-col">
      {children}
    </section>
  )
}
