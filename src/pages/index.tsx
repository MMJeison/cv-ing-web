// import { Inter } from 'next/font/google'

import { SideBarLeft } from '@/components/side-bar-left'
import { SideBarRight } from '@/components/side-bar-right'
import { Main } from '@/components/main'
import { Footer } from '@/components/footer'
import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <section className='relative flex justify-center mx-auto w-full min-h-screen bg-[#f0f0f6]'>
      <Head>
        <title>CV</title>
      </Head>
      <SideBarLeft />
      <section className='flex flex-col min-h-screen justify-between gap-7 w-full pl-[22%] pr-[7%]'>
        <Main />
        <Footer />
      </section>
      <SideBarRight />
    </section>
  )
}
