import { HiOutlineArrowRight } from 'react-icons/hi'
import { Text } from './text'
import { Knowledge } from './knowledge'
import { Education } from './education'
import { Portfolio } from './portfolio'

export function Main () {
  return (
    <main className="w-full flex flex-col items-center gap-7">
      <section className="bg-white w-full max-h-[23em] flex justify-between items-center px-[4%]">
        <div className="w-[55%] py-3">
          <h1 style={{ fontSize: 'var(--title-size-lg)' }} className="font-bold">
            I&rsquo;m Jeison Moncayo
          </h1>
          <h1 style={{ fontSize: 'var(--title-size-lg)' }} className="font-bold mb-1">
            <span className="text-[#FFB400]">Front-end</span> Developer
          </h1>
          <Text>
          Passionate about the world of programming and the creation of innovative solutions that simplify people&apos;s lives. With a solid knowledge of various technologies and a meticulous focus on code quality, I am committed to driving technological progress and overcoming complex challenges.
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
      <Knowledge />
      <Education />
      <Portfolio />
    </main>
  )
}
