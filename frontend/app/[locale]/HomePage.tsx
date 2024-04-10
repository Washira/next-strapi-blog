import Image from 'next/image'
import Hero from '@/app/components/Hero'
import BlogCard from '@/app/components/BlogCard'

const HomePage = (data: any) => {
  return (
    <div>
      <Hero />
      <div className='page-container'>
        <div className='divider'>
          <h2 className='text-2xl font-semibold'>Recent Articles</h2>
        </div>
        <div className='flex gap-4 flex-col lg:grid grid-cols-2 my-4 px-4 sm:px-0'>
          {data.data.map((item: any, index: number) => {
            return <BlogCard key={index} data={item} />
          })}
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

export default HomePage
