import { Post } from '@/app/[locale]/utils/interface'
import PostPage from '@/app/[locale]/blog/[id]/PostPage'

const fetchPost = async (id: string) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }
  try {
    const res = await fetch(
      // `${process.env.STRAPI_API_URL}/api/blogs/${id}`,
      `${process.env.STRAPI_API_URL}/api/blogs/${id}?populate=*`,
      options
    )
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch post')
  }
}

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const post: Post = await fetchPost(params.id)

  return <PostPage post={post} />
}

export default Page
