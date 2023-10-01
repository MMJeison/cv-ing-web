// import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { SideBarLeft } from '@/components/side-bar-left'
import { SideBarRight } from '@/components/side-bar-right'
import { Main } from '@/components/main'
import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  const [width, setWidth] = useState(0)
  const [pixelRatio, setPixelRatio] = useState(typeof window !== 'undefined' ? window.devicePixelRatio : 1)

  useEffect(() => {
    const calculateWidth = () => {
      const clientHeigt = typeof window !== 'undefined' ? window.innerHeight * pixelRatio : 0
      setWidth(Math.round(clientHeigt * 1.2))
    }
    // evento para escuchar cuando se cambia el tamaño de la pantalla
    const calculatePixelRatio = () => {
      setPixelRatio(typeof window !== 'undefined' ? window.devicePixelRatio : 1)
    }
    window.addEventListener('resize', calculatePixelRatio)

    calculateWidth()

    return () => {
      window.removeEventListener('resize', calculatePixelRatio)
    }
  }, [])

  return (
    <section style={{ width: width !== 0 ? width + 'px' : 'auto' }} className='relative flex gap-[20px] justify-center mx-auto min-h-screen'>
      <Head>
        <title>CV</title>
      </Head>
      <SideBarLeft />
      <Main />
      <SideBarRight />
    </section>
  )
}
