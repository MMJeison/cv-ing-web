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
    const diff = pixelRatio > 1 ? pixelRatio - 1 : 0
    const dHeight = Math.max(document.documentElement.clientHeight, 649 - (diff * 649)) * pixelRatio
    const dWidth = dHeight * 1.7
    const tSize = dHeight * 0.0169521
    const sSize = dHeight * 0.0208998
    const ttSize = dHeight * 0.034833
    const ttSizeLg = dHeight * 0.046444
    document.documentElement.style.setProperty('--text-size', `${tSize}px`)
    document.documentElement.style.setProperty('--subtitle-size', `${sSize}px`)
    document.documentElement.style.setProperty('--title-size', `${ttSize}px`)
    document.documentElement.style.setProperty('--title-size-lg', `${ttSizeLg}px`)
    setWidth(dWidth)
    setHeight(dHeight)
    const handleResize = () => {
      const pixelRatio = window.devicePixelRatio
      const diff = pixelRatio > 1 ? pixelRatio - 1 : 0
      const docHeight = Math.max(document.documentElement.clientHeight, 649 - (diff * 649))
      if (pixelRatio > 1) {
        const nHeight = docHeight * pixelRatio
        setHeight(nHeight)
        setTop(docHeight - nHeight)
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
