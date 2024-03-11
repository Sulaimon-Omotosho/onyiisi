'use client'

import { MoveDownRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HeroCarousel() {
  const heroes = [
    { img: '/Hero.png' },
    { img: '/Hero 2.jpg' },
    { img: '/Hero 3.jpg' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentIndex((prev) => (prev === heroes.length - 1 ? 0 : prev + 1)),
      5000
    )
    return () => clearInterval(interval)
  }, [])

  const goToHero = (idx) => {
    setCurrentIndex(idx)
  }

  return (
    <div className=''>
      <div className='w-full h-[400px] md:h-[480px] lg:h-[680px] xl:h-[729px] relative my-5 lg:my-10 z-0 duration-500'>
        <Image
          src={heroes[currentIndex].img}
          alt='Hero Onyiisi'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute bottom-9 md:bottom-11 lg:bottom-20 left-9 md:left-11 lg:left-20 w-[250px] md:w-[350px] lg:w-[500px] flex flex-col gap-5'>
          <p className='text-xl lg:text-2xl'>
            Discover Exquisite Jewelry Crafted from Pure Gold and Platinum
          </p>
          <button className='text-white bg-orange-800 py-2 lg:py-3 w-[100px] lg:w-[150px] rounded-full uppercase font-thin text-xs flex items-center justify-center gap-1 lg:gap-2 '>
            shop now
            <span>
              <MoveDownRight className='w-4 lg:w-5 h-4 lg:h-5 pt-1' />
            </span>
          </button>
          <div className='flex gap-1 '>
            {heroes.map((hero, idx) => (
              <button
                key={idx}
                onClick={() => goToHero(idx)}
                className=' bg-orange-800 py-[2px] w-[30px] lg:w-[50px] border-none rounded-full'
              ></button>
            ))}
            {/* <button className='border-[1px] border-orange-800 py-[2px] w-[30px] lg:w-[50px] rounded-full'></button>
            <button className='border-[1px] border-orange-800 py-[2px] w-[30px] lg:w-[50px] rounded-full'></button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
