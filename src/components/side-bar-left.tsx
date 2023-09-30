import { Divider } from './divider'
import { SideBarSection } from './sbl-section'
import { ProgressBarItem } from './progress-bar-item'
import { Subtitle } from './subtitle'
import { Text } from './text'

export function SideBarLeft () {
  return (
    <aside className="bg-white w-[22%] flex flex-col items-center gap-2 py-5 px-2">
      <SideBarSection>
        <div className='relative w-[49%] mx-auto'>
          <img
            src="/images/profile.jpg"
            alt="Next.js logo"
            className="w-full aspect-square object-cover bg-center rounded-full"
          />
          <span className="absolute bottom-0 right-0 bg-[#7eb942] rounded-full w-4 h-4 translate-x-[-90%] translate-y-[-90%]" />
        </div>
        <div className="w-[49%] flex flex-col items-center gap-1 my-6 mx-auto">
          <Subtitle>Rayan Adlardard</Subtitle>
          <Text>Front-End Developer</Text>
        </div>
      </SideBarSection>
      <Divider/>
      <SideBarSection>
        <Subtitle>Languages</Subtitle>
        <ProgressBarItem title='Bangla' percentage={5} />
        <ProgressBarItem title='English' percentage={80} />
        <ProgressBarItem title='Spanish' percentage={100} />
      </SideBarSection>
      <Divider />
      <SideBarSection>
        <Subtitle>Programming Languages</Subtitle>
        <ProgressBarItem title='HTML' percentage={90} />
        <ProgressBarItem title='CSS' percentage={90} />
        <ProgressBarItem title='JavaScript' percentage={85} />
        <ProgressBarItem title='PHP' percentage={70} />
        <ProgressBarItem title='WordPress' percentage={20} />
      </SideBarSection>
    </aside>
  )
}
