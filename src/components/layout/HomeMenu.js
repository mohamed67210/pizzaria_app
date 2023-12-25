import Image from 'next/image'
import React from 'react'
import HeaderSection from './HeaderSection'
import MenuCard from '../Menu/MenuCard'

function HomeMenu() {
  return (
    <section id='menu' className='mt-5 pt-2 overflow-hidden'>
        <div className='relative'>
            <div className=' absolute w-48 h-48 -left-20'>
                <Image src={'/upload_image/tomate.png'} alt='tomate' objectFit='contain' layout='fill' />
            </div>
            <div className=' absolute w-48 h-48 -right-7 -top-12'>
                <Image src={'/upload_image/mozza.png'} alt='tomate' objectFit='contain' layout='fill' />
            </div>
            <div className=' absolute w-48 h-48 right-1'>
                <Image src={'/upload_image/olive.png'} alt='tomate' objectFit='contain' layout='fill' />
            </div>
        </div>
        {/* titre de la section Menu */}
        <HeaderSection subHeader={'check out'} mainHeader={"Menu"}/>
        {/* menu cards wrapper */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:p-8 p-2'>
            <MenuCard pizzaImage={'/upload_image/pizzaCard.png'} price={11.50}/>
            <MenuCard pizzaImage={'/upload_image/pizza2Card.png'} price={11}/>
            <MenuCard pizzaImage={'/upload_image/pizza3Card.png'} price={13.50}/>
            <MenuCard pizzaImage={'/upload_image/pizza4Card.png'} price={10.50}/>
        </div>
    </section>
  )
   
}

export default HomeMenu