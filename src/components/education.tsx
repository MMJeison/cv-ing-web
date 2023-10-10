import { Text } from './text'
import { EducationCard } from './education-card'
import { Divider } from './divider'

export function Education () {
  return (
    <section className='w-full flex flex-col items-center gap-7'>
      <div className='w-[70%] flex flex-col items-center gap-2'>
        <h2 style={{ fontSize: 'var(--title-size)' }} className='font-bold'>Education</h2>
        <Text align='center'>
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
  )
}
