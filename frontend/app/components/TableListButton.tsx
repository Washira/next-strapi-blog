'use client'

import React from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

const TableListButton = ({
  data,
  selectedId,
  selectedLocale,
  children,
}: {
  data: any
  selectedId: string
  selectedLocale: string
  children: React.ReactNode
}) => {
  const router = useRouter()

  return (
    <button
      onClick={() => {
        setCookie('idKeysByLocales', data)
        router.push(`/${selectedLocale}/blog/${selectedId}`)
      }}
    >
      {children}
    </button>
  )
}

export default TableListButton
