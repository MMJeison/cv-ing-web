import { Text } from './text'
import { KnowledgeCard } from './knowledge-card'
import { PcIcon1, PcIcon2, PcIcon3, SoundIcon, PhotographerIcon } from './icons'

export function Knowledge () {
  return (
    <section className='w-full flex flex-col items-center gap-7'>
      <div className='w-[70%] flex flex-col items-center gap-2'>
        <h2 style={{ fontSize: 'var(--title-size)' }} className='font-bold'>My Knowledge</h2>
        <Text align='center'>
        These are the most significant insights I have gained throughout my academic journey and professional experience. These lessons, stemming from intensive studies and work challenges, constitute the solid foundation upon which I build my extensive knowledge.
        </Text>
      </div>
      <div className='w-full flex flex-col gap-3'>
        <div className='w-full flex justify-between'>
          <KnowledgeCard icon={<PcIcon3 />} title='Game Design' text='Character Design, Props & Objects' />
          <KnowledgeCard icon={<PcIcon1 />} title='Web Development' text='Blog, E-Commerce' />
          <KnowledgeCard icon={<PcIcon2 />} title='UI/UX Design' text='Mobile app, Website Design' />
        </div>
        <div className='w-full flex justify-between'>
          <KnowledgeCard icon={<SoundIcon />} title='Sound Design' text='Voice Over, Beat Making' />
          <KnowledgeCard icon={<PhotographerIcon />} title='Photography' text='Portrait, Product Photography' />
          <KnowledgeCard title='Advertising'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.'
            btn='ORDER NOW' />
        </div>
      </div>
    </section>
  )
}
