interface PopUpWrapperProps {
  show?: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export function PopUpWrapper ({ show = false, setShow, children }: PopUpWrapperProps) {
  return (
    <section onClick={() => { show && setShow(false) }}
    style={{ display: show ? 'flex' : 'none' }}
    className='fixed top-0 left-0 z-50 w-full h-full bg-[#00000060] flex justify-center items-center'>
      {children}
    </section>
  )
}
