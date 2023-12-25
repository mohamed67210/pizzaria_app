'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Bars from '../icons/Bars'

function Header() {

    const [isMenuOpen,setMenuOpen]= useState(false)

    const handleMenu = ()=>{
        if (isMenuOpen) {
            setMenuOpen(false)
        } else {
            setMenuOpen(true)
        }
    }


  return (
    <header className='sticky top-0 bg-white flex items-center justify-between py-2 z-50'>
              <nav className='relative flex items-center gap-8 font-semibold w-full'>
                <Link className='text-primary text-2xl font-bold ml-1' href={'/'}>Pizzaria</Link>
                <div className='absolute right-1 cursor-pointer' onClick={handleMenu}>
                    <Bars/>
                </div>
                <div className={` md:flex ${isMenuOpen ? ('flex') : ('hidden') } bg-white p-2 w-full z-[60] md:fle-row  justify-between md:flex-row flex-col md:static absolute top-10 right-0 md:items-center`}>
                  <div className='flex gap-4 flex-col md:flex-row'>
                    <Link href={'/'} onClick={(e)=>{setMenuOpen(false)}}>Accueil</Link>
                    <Link href={'#menu'} onClick={(e)=>{setMenuOpen(false)}}>Menu</Link>
                    <Link href={'#about'} onClick={(e)=>{setMenuOpen(false)}}>A propos</Link>
                    <Link href={'#contact'} onClick={(e)=>{setMenuOpen(false)}}>Contact</Link>
                  </div>
                  <div className='flex items-center gap-4'>
                    <Link href={''}>Connexion</Link>
                    <button>Inscription</button>
                  </div>
                </div>
              </nav>
    </header>
  )
}

export default Header