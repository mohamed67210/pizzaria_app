import Image from 'next/image'
import React from 'react'
import Right from '../icons/Right'

function Hero() {
  return (
    <section className='relative flex flex-col mt-4  md:rounded-lg md:m-1 overflow-hidden'>
        <div className='absolute w-full h-full'>
            <Image src={'/upload_image/heroBg.jpg'} layout='fill' objectFit='cover' alt='Pizza_hero' />
        </div>
        <div className='z-10 pt-12 md:pt-36 bg-black/40 h-full px-4 pb-2'>
            <h1 className='text-white text-4xl font-bold md:leading-normal'>Tout est <br/> Meilleur <br/>Avec une <span className='text-primary'>Pizza</span></h1>
            <p className='my-4 p-1 text-white text-sm w-1/2'>C'est le maillon manquant qui fait briller votre journée et apportant une harmonie délicieuse à chaque instant.</p>
            <div className='flex flex-row gap-4 items-center text-xs md:text-sm'>
                <button className='flex flex-row gap-2 uppercase rounded-full px-2 py-2 border border-white/50 items-center'>Commander maintenant<Right/></button>
                <button className='flex flex-row gap-2 items-center bg-white/50 rounded-full font-semibold'>Savoir plus<Right/></button>
            </div>
        </div>
    </section>
  )
}

export default Hero