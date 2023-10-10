import { HiOutlineArrowRight } from 'react-icons/hi'
import { Text } from './text'
import { Knowledge } from './knowledge'
import { Education } from './education'
import { Portfolio } from './portfolio'

export function Main () {
  return (
    <main className="w-full flex flex-col items-center gap-7">
      <section className="bg-white w-full aspect-[16/5] flex justify-between items-center px-[4%]">
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
      <Knowledge />
      <Education />
      <Portfolio />
    </main>
  )
}
