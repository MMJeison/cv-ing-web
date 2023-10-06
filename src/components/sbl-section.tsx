interface SideBarSectionProps {
  children: React.ReactNode
}

export function SideBarSection ({ children }: SideBarSectionProps) {
  return (
    <section className="w-[80%] flex flex-col gap-[0.1em] mb-[0.15em]">
      {children}
    </section>
  )
}
