import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bgSecondary`}>
        <main className='relative max-w-5xl mx-auto md:p-4 min-h-screen pb-10 bg-white'>
          <Header/>
          {children}
          <Footer/>
        </main>
        </body>
    </html>
  )
}
