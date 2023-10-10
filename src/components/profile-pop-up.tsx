import { PopUpWrapper } from './pop-up-wrapper'
import { Subtitle } from './subtitle'
import { Text } from './text'

interface PopUpWrapperProps {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export function ProfilePopUp ({ show, setShow }: PopUpWrapperProps) {
  return (
    <PopUpWrapper show={show} setShow={setShow}>
      <div className='w-[20em] flex flex-col items-center gap-2'>
        <Subtitle>Profile</Subtitle>
        <Text align='center'>
        I am a passionate and creative individual with a strong interest in the field of design. My goal is to become a professional designer and to work in an environment that will allow me to use my skills to the fullest.
        </Text>
      </div>
    </PopUpWrapper>
  )
}
