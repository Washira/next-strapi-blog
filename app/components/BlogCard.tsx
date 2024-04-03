import Image from 'next/image'
import { Post } from '@/app/[locale]/utils/interface'

const BlogCard = (data: Post) => {
  const { title, content, cover_img, createdAt } = data.data.attributes
  /** description */
  let desc = content.find((atr: any) => atr.type === 'paragraph').children[0]
    .text
  if (desc.length > 80) {
    desc = desc.substring(0, 30) + '...'
  }

  return (
    <div className='card sm:card-side bg-base-100 shadow-xl'>
      <figure>
        {cover_img.data.map((item: any, index: number) => {
          return (
            <Image
              key={index}
              src={`${process.env.STRAPI_API_URL}${item.attributes.url}`}
              alt={item.attributes.name}
              width={100}
              height={100}
            />
          )
        })}
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {title}
          <div className='badge badge-secondary'>NEW</div>
        </h2>
        <p>{desc}</p>

        <div className='card-actions justify-between'>
          <div className='card-actions'>
            <div className='badge badge-outline'>Fashion</div>
            <div className='badge badge-outline'>Products</div>
          </div>
          <button className='btn btn-primary'>Read</button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
