import { cookies } from 'next/headers'
import { Post } from '@/app/[locale]/utils/interface'
import PostPage from '@/app/[locale]/blog/[id]/PostPage'
import api from '@/app/lib/api'

const fetchPost = async ({ id, locale }: { id: string; locale: string }) => {
  try {
    let test: any = cookies().get('idKeysByLocales')
    test = JSON.parse(test?.value)

    const selectedKey = test?.find((item: any) => item.locale == locale)
    const selectedId = selectedKey?.id || id
    const res = await api.get(`/api/blogs/${selectedId}?populate=*`)
    return res
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch post')
  }
}

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string; locale: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  let idKeysByLocales = []
  const post: Post = await fetchPost({
    id: params.id,
    locale: params.locale,
  })
  return <PostPage post={post} />
}

export default Page
