import type { Metadata } from 'next'
import api from '@/app/lib/api'
import { Params } from '@/app/[locale]/utils/interface'
import HomePage from '@/app/[locale]/HomePage'

export const metadata: Metadata = {
  title: 'Next Sanity Blog',
  description: 'Blog Website using Next.js and Sanity.io',
}

const fetchBlogs = async (locale: string = 'th') => {
  try {
    const res = await api.get(`/api/blogs?populate=*&locale=${locale}`)
    return res
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch blog posts')
  }
}

export default async function Home({ params }: Params) {
  const { locale } = params
  const posts = await fetchBlogs(locale)

  return <HomePage data={posts?.data} />
}
