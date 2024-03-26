const fetchPost = async (id: string) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  }
  try {
    const res = await fetch(
      `${process.env.STRAPI_API_URL}/api/blogs/${id}`,
      options
    )
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch post')
  }
}

const PostPage = async ({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const post = await fetchPost(params.id)
  console.log(`post`, post)

  return (
    <div>
      <h1>Post Page</h1>
      <div>
        <p>Post content goes here</p>
      </div>
    </div>
  )
}

export default PostPage
