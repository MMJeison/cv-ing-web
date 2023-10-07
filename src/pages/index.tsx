// import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { SideBarLeft } from '@/components/side-bar-left'
import { SideBarRight } from '@/components/side-bar-right'
import { Main } from '@/components/main'
import { Footer } from '@/components/footer'
import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [top, setTop] = useState(0)

  useEffect(() => {
    const pixelRatio = window.devicePixelRatio
    const dHeight = Math.floor(document.documentElement.clientHeight * pixelRatio)
    const dWidth = Math.ceil(dHeight * 1.7)
    setWidth(dWidth)
    setHeight(dHeight)
    const handleResize = () => {
      const pixelRatio = window.devicePixelRatio
      const docHeight = document.documentElement.clientHeight
      if (pixelRatio > 1) {
        setHeight(Math.floor(docHeight * pixelRatio))
        setTop(Math.round(docHeight - (docHeight * pixelRatio)))
      } else {
        setHeight(docHeight)
        setTop(0)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section style={{ width: width + 'px' }}
        className='relative flex justify-between mx-auto min-h-screen bg-[#f0f0f6]'>
      <Head>
        <title>CV</title>
      </Head>
      <SideBarLeft top={top} height={height} />
      <section className='flex flex-col min-h-screen justify-between gap-7 w-[73%] px-[2%]'>
        <Main />
        <Footer />
      </section>
      <SideBarRight top={top} height={height} />
    </section>
  )
}
