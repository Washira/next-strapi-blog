import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'
import Provider from '@/app/utils/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Sanity Blog',
  description: 'Blog Website using Next.js and Sanity.io',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>
          <NavBar />
          <div>{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
