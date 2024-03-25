'use client'

import React from 'react'
import useTheme from '@/app/store/theme'

interface Props {
  children: React.ReactNode
}

const Provider = ({ children }: Props) => {
  const theme = useTheme((state: any) => state.theme)
  return <div data-theme={theme}>{children}</div>
}

export default Provider
