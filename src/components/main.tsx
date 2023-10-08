import { HiOutlineArrowRight } from 'react-icons/hi'
import { Text } from './text'
import { KnowledgeCard } from './knowledge-card'
import { PcIcon1, PcIcon2, PcIcon3, SoundIcon, PhotographerIcon } from './icons'
import { EducationCard } from './education-card'
import { Divider } from './divider'
import { PortfolioCard } from './portfolio-card'

export function Main () {
  return (
    <main className="w-full flex flex-col items-center gap-7">
      <section className="bg-white w-full h-[20em] flex justify-between items-center px-[3.5em]">
        <div className="w-[55%]">
          <h1 className="text-[2em] font-bold">
            I’m Rayan Adlrdard
          </h1>
          <h1 style={{ fontSize: 'var(--title-size-lg)' }} className="font-bold mb-1">
            <span className="text-[#FFB400]">Front-end</span> Developer
          </h1>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
          </Text>
          <button style={{ fontSize: 'var(--subtitle-size)' }} className='flex gap-1 items-center bg-[#FFB400] rounded-sm py-2 px-4 mt-6'>
            HIRE ME
            <HiOutlineArrowRight />
          </button>
        </div>
        <div className="w-[37%] h-full flex items-end">
          <img
              src="/images/profile-removebg.png"
              alt="Next.js logo"
              className="h-full w-auto max-w-full object-cover bg-center"
            />
        </div>
      </section>
      <section className='w-full flex flex-col items-center gap-7'>
        <div className='w-[50%] flex flex-col items-center gap-2'>
          <h2 style={{ fontSize: 'var(--title-size)' }} className='font-bold'>My Knowledge</h2>
          <Text aling='center'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <div className='w-full flex justify-between'>
            <KnowledgeCard icon={<PcIcon1 />} title='Web Development' text='Blog, E-Commerce' />
            <KnowledgeCard icon={<PcIcon2 />} title='UI/UX Design' text='Mobile app, Website Design' />
            <KnowledgeCard icon={<SoundIcon />} title='Sound Design' text='Voice Over, Beat Making' />
          </div>
          <div className='w-full flex justify-between'>
            <KnowledgeCard icon={<PcIcon3 />} title='Game Design' text='Character Design, Props & Objects' />
            <KnowledgeCard icon={<PhotographerIcon />} title='Photography' text='Portrait, Product Photography' />
            <KnowledgeCard title='Advertising'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.'
              btn='ORDER NOW' />
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col items-center gap-7'>
        <div className='w-[50%] flex flex-col items-center gap-2'>
          <h2 className='text-[1.5em] font-bold'>Education</h2>
          <Text aling='center'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
        </div>
        <div className='w-full bg-white py-4 px-7'>
          <EducationCard institution='University of Toronto' date='Jan 1016 - Dec 2021' title='Bachelor of Computer Science'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' />
          <Divider />
          <EducationCard institution='Programming Course' date='Jan 1016 - Dec 2021' title='Bachelor of Computer Science'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' />
          <Divider />
          <EducationCard institution='Web Developer Courses' date='Jan 1016 - Dec 2021' title='Bachelor of Computer Science'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' />
        </div>
      </section>
      <section className='w-full flex flex-col items-center gap-7 overflow-hidden'>
        <div className='w-[50%] flex flex-col items-center gap-2'>
          <h2 className='text-[1.5em] font-bold'>Portfolio</h2>
          <Text aling='center'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </Text>
        </div>
        <div className='w-full flex gap-7 py-2 overflow-x-auto'>
          <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
          <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
          <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
          <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        </div>
      </section>
    </main>
  )
}
