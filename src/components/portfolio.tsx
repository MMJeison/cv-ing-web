import { Text } from './text'
import { PortfolioCard } from './portfolio-card'

export function Portfolio () {
  return (
    <section className='w-full flex flex-col items-center gap-7 overflow-hidden'>
      <div className='w-[50%] flex flex-col items-center gap-2'>
        <h2 style={{ fontSize: 'var(--title-size)' }} className='font-bold'>Portfolio</h2>
        <Text aling='center'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </Text>
      </div>
      <div className='w-full flex gap-7 py-2 overflow-x-auto'>
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
        <PortfolioCard img='/images/img-test.png' title='How to make web tempates' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna' />
      </div>
    </section>
  )
}
