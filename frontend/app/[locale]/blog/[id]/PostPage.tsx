import dayjs from 'dayjs'
import Image from 'next/image'
import { Post } from '@/app/[locale]/utils/interface'

const PostPage = ({ post }: { post: Post }) => {
  const { title, content, img, createdAt } = post.data.attributes
  const createdDate = dayjs(createdAt).format('MMMM D, YYYY')

  return (
    <div className='container'>
      <div className='text-center'>
        <h1 className='font-bold text-2xl py-4'>{title}</h1>
        {img.data.map((item: any, index: number) => {
          // console.log('item.attributes.url', item.attributes.url)
          return (
            <Image
              key={index}
              className='w-1/2 mx-auto'
              src={`${process.env.STRAPI_API_URL}${item.attributes.url}`}
              alt={item.attributes.name}
              width={item.attributes.width}
              height={item.attributes.height}
              priority={true}
            />
          )
        })}
        <div>public: {createdDate}</div>
        <div className='py-4'>
          {content.map((item: any, index: number) => {
            if (item.type === 'image') {
              console.log('has image')
              return (
                <img
                  key={index}
                  src={item.image.url}
                  alt={item.image.name}
                  className='w-1/2 mx-auto'
                />
              )
            }
            return (
              <div key={index}>
                {item.children.map((child: any, index: number) => {
                  return (
                    <p key={index} className='text-start'>
                      {child.text}
                    </p>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PostPage
