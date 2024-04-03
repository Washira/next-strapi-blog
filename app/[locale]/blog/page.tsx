import PostTable from '@/app/components/PostTable'
import api from '@/app/lib/api'

const fetchBlogs = async (locale: string = 'th') => {
  try {
    const res = await api.get(`/api/blogs?populate=*&locale=${locale}`)
    return res
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch blog posts')
  }
}

const BlogPage = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params
  const posts = await fetchBlogs(locale)
  return (
    <div className='page-container h-svh'>
      <h1 className='text-3xl font-bold'>Blog</h1>
      <div className='py-4'>
        <PostTable data={posts} />
      </div>
    </div>
  )
}

export default BlogPage
