import type { Metadata } from 'next'
import HomePage from '@/app/[locale]/HomePage'

export const metadata: Metadata = {
  title: 'Next Sanity Blog',
  description: 'Blog Website using Next.js and Sanity.io',
}

export default function Home() {
  return <HomePage />
}
