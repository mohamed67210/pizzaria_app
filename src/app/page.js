import About from '@/components/layout/About'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import HomeMenu from '@/components/layout/HomeMenu'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  //  page principale
          <>
            {/* Hero section */}
            <Hero/>
            {/* Menu section */}
            <HomeMenu/>
            {/* About section */}
            <About/>
            {/* Contact section */}
            <Contact/>
          </>
        )
}
