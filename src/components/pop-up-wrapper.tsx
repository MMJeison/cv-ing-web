export interface PopUpWrapperProps {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export function PopUpWrapper ({ show, setShow, children }: PopUpWrapperProps) {
  return (
    <section onClick={() => { show && setShow(false) }}
    style={{ display: show ? 'flex' : 'none' }}
    className='fixed top-0 left-0 z-50 w-full h-full bg-[#00000060] flex justify-center items-center'>
      <div className="bg-white shadow p-2 relative">
        {children}
        <div className="absolute w-[1.5em] aspect-square top-[-0.7em] right-[-0.7em]">
          <button onClick={() => { setShow(false) }} className="bg-[#FFB400] rounded-full p-1">
            <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
