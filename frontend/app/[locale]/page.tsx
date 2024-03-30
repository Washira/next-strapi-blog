import Image from 'next/image'
import type { Metadata } from 'next'
import Hero from '@/app/components/Hero'
import ArticleCard from '@/app/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Next Sanity Blog',
  description: 'Blog Website using Next.js and Sanity.io',
}

export default function Home() {
  return (
    <div>
      <Hero />
      <div className='container'>
        <div className='divider'>
          <h2 className='text-2xl font-semibold'>Recent Articles</h2>
        </div>
        <div className='flex gap-4 flex-col lg:grid grid-cols-2 my-4 px-4 sm:px-0'>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
        <div className='card lg:card-side bg-base-100 shadow-xl'>
          <figure>
            <Image
              width={400}
              height={400}
              src='https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
              alt='Album'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
