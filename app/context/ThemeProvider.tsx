'use client'

import React, { useEffect } from 'react'
import useTheme from '@/app/store/theme'
import { setCookie, getCookie } from 'cookies-next'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, isMounted } = useTheme((state: any) => state)

  useEffect(() => {
    useTheme.setState({ isMounted: true })
    const defaultTheme = getCookie('theme') || theme
    // set cookie for theme
    // document.cookie = `theme=${defaultTheme}; path=/; max-age=31536000`
    setCookie('theme', defaultTheme)
    useTheme.setState({ theme: defaultTheme })
  }, [])

  if (!isMounted) {
    return <div>Loading... </div>
  }

  return <div data-theme={theme}>{children}</div>
}

export default ThemeProvider
