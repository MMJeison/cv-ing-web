// import { Inter } from 'next/font/google'

import { SideBarLeft } from '@/components/side-bar-left'
import { SideBarRight } from '@/components/side-bar-right'
import { Main } from '@/components/main'
import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <section className='flex gap-[20px] justify-center mx-auto h-screen max-h-screen w-[960px]'>
      <Head>
        <title>CV</title>
      </Head>
      <SideBarLeft />
      <Main />
      <SideBarRight />
    </section>
  )
}
