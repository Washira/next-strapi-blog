import PostTable from '@/app/components/PostTable'

const fetchBlogPosts = async () => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }
  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/blogs`, options)
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch blog posts')
  }
}

const BlogPage = async () => {
  const posts = await fetchBlogPosts()
  return (
    <div className='container'>
      <h1 className='text-3xl font-bold'>Blog</h1>
      <PostTable data={posts} />
    </div>
  )
}

export default BlogPage
