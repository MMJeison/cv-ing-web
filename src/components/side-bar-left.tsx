import { Divider } from './divider'
import { SideBarSection } from './sbl-section'
import { ProgressBarItem } from './progress-bar-item'
import { Subtitle } from './subtitle'
import { Text } from './text'
import { AiOutlineBlock } from 'react-icons/ai'

interface SideBarLeftProps {
  top: number
  height: number
}

export function SideBarLeft ({ top, height }: SideBarLeftProps) {
  return (
    <aside style={{
      top: top + 'px',
      height: height + 'px'
    }} className="sticky bg-white w-[20%] flex flex-col items-center gap-[0.3em] py-4 px-2">
      <SideBarSection>
        <div className='relative w-[65%] mx-auto'>
          <img
            src="/images/profile.jpg"
            alt="Next.js logo"
            className="w-full aspect-square object-cover bg-center rounded-full"
          />
          <span className="absolute bottom-[9%] right-[9%] bg-[#7eb942] rounded-full w-[12%] aspect-square" />
        </div>
        <div className="w-[65%] flex flex-col items-center gap-[2%] mt-[0.3em] mb-[0.15em] mx-auto">
          <Subtitle>Rayan Adlardard</Subtitle>
          <Text>Front-End Developer</Text>
        </div>
      </SideBarSection>
      <Divider width='80%'/>
      <SideBarSection>
        <div className='flex justify-between items-center'>
          <Text>Age:</Text>
          <Text>25</Text>
        </div>
        <div className='flex justify-between items-center'>
          <Text>Residence:</Text>
          <Text>BD</Text>
        </div>
        <div className='flex justify-between items-center'>
          <Text>Freelance:</Text>
          <Text color='#7EB942'>Aveilable</Text>
        </div>
        <div className='flex justify-between items-center'>
          <Text>Address:</Text>
          <Text>Dhaka, Bangladesh</Text>
        </div>
      </SideBarSection>
      <Divider width='80%'/>
      <SideBarSection>
        <Subtitle>Languages</Subtitle>
        <ProgressBarItem title='Bangla' percentage={5} />
        <ProgressBarItem title='English' percentage={80} />
        <ProgressBarItem title='Spanish' percentage={100} />
      </SideBarSection>
      <Divider width='80%'/>
      <SideBarSection>
        <Subtitle>Programming Languages</Subtitle>
        <ProgressBarItem title='HTML' percentage={90} />
        <ProgressBarItem title='CSS' percentage={90} />
        <ProgressBarItem title='JavaScript' percentage={85} />
        <ProgressBarItem title='PHP' percentage={70} />
        <ProgressBarItem title='WordPress' percentage={20} />
      </SideBarSection>
      <Divider width='80%'/>
      <SideBarSection>
        <Subtitle>Estra Skills</Subtitle>
        <div className='flex justify-start items-center gap-[0.1em] my-[0.15em'>
          <AiOutlineBlock className='w-[1em] h-[1em] text-[#FFB400]' />
          <Text>Bootstrap, Materialize</Text>
        </div>
        <div className='flex justify-start items-center gap-[0.1em] my-[0.15em]'>
          <AiOutlineBlock className='w-[1em] h-[1em] text-[#FFB400]' />
          <Text>Stylus, Sass, Less</Text>
        </div>
        <div className='flex justify-start items-center gap-[0.1em] my-[0.15em]'>
          <AiOutlineBlock className='w-[1em] h-[1em] text-[#FFB400]' />
          <Text>Gulp, Webpack, Grunt</Text>
        </div>
        <div className='flex justify-start items-center gap-[0.1em] my-[0.15em]'>
          <AiOutlineBlock className='w-[1em] h-[1em] text-[#FFB400]' />
          <Text>GIT Knowledge</Text>
        </div>
      </SideBarSection>
      <Divider width='80%'/>
    </aside>
  )
}
