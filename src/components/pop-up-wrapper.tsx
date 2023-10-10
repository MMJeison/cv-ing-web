interface PopUpWrapperProps {
  children: React.ReactNode
}

export function PopUpWrapper ({ children }: PopUpWrapperProps) {
  return (
    <section className='fixed top-0 left-0 w-full h-full bg-[#00000010] flex justify-center items-center'>
      {children}
    </section>
  )
}
