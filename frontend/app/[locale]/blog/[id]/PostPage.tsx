import { Post } from '@/app/utils/interface'

const PostPage = ({ post }: { post: Post }) => {
  const { title, content, img, categories } = post.data.attributes
  return (
    <div className='container h-screen'>
      <h1>{title}</h1>
      <div>
        <p>Post content goes here</p>
      </div>
    </div>
  )
}

export default PostPage
