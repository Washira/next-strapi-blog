import { Post } from '@/app/[locale]/utils/interface'
import dayjs from 'dayjs'

const PostPage = ({ post }: { post: Post }) => {
  const { title, content, img, createdAt } = post.data.attributes
  const createdDate = dayjs(createdAt).format('MMMM D, YYYY')

  return (
    <div className='container'>
      <div className='text-center'>
        <h1 className='font-bold py-4'>{title}</h1>
        {img.data.map((item: any, index: number) => {
          // console.log('item.attributes.url', item.attributes.url)
          return (
            <img
              key={index}
              src={item.attributes.url}
              alt={item.attributes.name}
              className='w-1/2 mx-auto'
            />
          )
        })}
        <div>{createdDate}</div>
        <div>
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
                  return <p key={index}>{child.text}</p>
                })}
              </div>
            )
          })}
        </div>
        <div>
          <p>Post content goes here</p>
        </div>
      </div>
    </div>
  )
}

export default PostPage
