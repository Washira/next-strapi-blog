import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'
import ThemeProvider from '@/app/context/ThemeProvider'
import { cookies } from 'next/headers'
import { themes } from '@/theme'

const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
  children: React.ReactNode
  params: { locale: string }
}

export default function RootLayout({ children, params }: LayoutProps) {
  const hours = new Date().getHours()
  const isDayTime = hours > 6 && hours < 18
  const defaultTheme = isDayTime ? themes[0] : themes[1]
  const theme = cookies().get('theme')?.value || defaultTheme
  const { locale } = params
  return (
    <html lang={locale} data-theme={theme}>
      <body className={inter.className}>
        <ThemeProvider>
          <div>
            <NavBar params={params} />
            {children}
            <Footer params={params} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
