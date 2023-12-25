import React from 'react'
import HeaderSection from './HeaderSection'
import Phone from '../icons/Phone'

function Contact() {
  return (
    <section id='contact' className='text-center my-8 px-2'>
        <HeaderSection mainHeader={"contact"} subHeader={"savoir plus ?"}/>
        <div className='mt-8 flex items-center justify-center gap-4'>
            <span className='bg-primary/70 p-2 text-white rounded-full'><Phone/></span>
            <a className='text-2xl text-secondary md:text-4xl' href='tel:+330000000000'>+33 00 00 00 00 00</a>
        </div>
    </section>
  )
}

export default Contact