import { Text } from './text'
import { PortfolioCard, type PortfolioCardProps } from './portfolio-card'

const portfolioCards: PortfolioCardProps[] = [
  {
    img: '/images/img-test.png',
    title: 'How to make web templates',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum. a urna',
    repoLink: 'https://github.com/'
  },
  {
    img: '/images/img-test.png',
    title: 'The best way to learn web development',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum. a urna',
    repoLink: 'https://github.com/'
  },
  {
    img: '/images/img-test.png',
    title: 'Why you should learn web development',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum. a urna',
    repoLink: 'https://github.com/'
  },
  {
    img: '/images/img-test.png',
    title: 'How to make templates for web',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum. a urna',
    repoLink: 'https://github.com/'
  },
  {
    img: '/images/img-test.png',
    title: 'Why you should try web development',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna',
    fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum. a urna',
    repoLink: 'https://github.com/'
  }
]

export function Portfolio () {
  return (
    <section className='w-full flex flex-col items-center gap-7 overflow-hidden'>
      <div className='w-[70%] flex flex-col items-center gap-2'>
        <h2 style={{ fontSize: 'var(--title-size)' }} className='font-bold'>Portfolio</h2>
        <Text align='center'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </Text>
      </div>
      <div className='w-full flex gap-7 py-1 overflow-x-auto scrollbar'>
        {portfolioCards.map((card, _) => (
          <PortfolioCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}
