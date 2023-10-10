import { PopUpWrapper } from './pop-up-wrapper'
import { Text } from './text'
import { type PortfolioCardProps } from './portfolio-card'

interface PortfolioPopUpProps {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  data: PortfolioCardProps
}

export function PortfolioPopUp ({ show, setShow, data }: PortfolioPopUpProps) {
  return (
    <PopUpWrapper show={show} setShow={setShow}>
      <div className='w-[25em] flex flex-col gap-2 p-3'>
        <img src={data.img} alt={data.title} className='w-full aspect-video object-contain' />
        <h2 style={{ fontSize: 'var(--subtitle-size-lg)' }} className='font-bold' >
          {data.title}
        </h2>
        <Text>
          {data.fullDescription}
        </Text>
        <a href={data.repoLink} target='_blank' rel='noreferrer' className='flex items-center justify-start text-[#FFB400]'>
          <Text color='#FFB400'>See Repository</Text>
        </a>
      </div>
    </PopUpWrapper>
  )
}
