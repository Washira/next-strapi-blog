'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'
import useTheme from '@/app/store/theme'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = useTheme((state: any) => state.theme)
  return (
    <html lang='en' data-theme={theme}>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
