import Link from 'next/link'
import Image from 'next/image'

const PostTable = ({ data }: { data: any }) => {
  const posts = data?.data
  // console.log('posts', posts)
  const descriptionClass = 'hidden md:block'

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th className={descriptionClass}>Description</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts
            .filter((post: any) =>
              post.attributes.categories.data.some(
                (cat: any) => cat.attributes.title === 'post'
              )
            )
            .map((post: any, i: string) => {
              /** image */
              const { url, name } = post.attributes.img.data[0].attributes
              /** description */
              let desc = post.attributes.content.find(
                (atr: any) => atr.type === 'paragraph'
              ).children[0].text
              if (desc.length > 80) {
                desc = desc.substring(0, 80) + '...'
              }
              return (
                <tr key={i}>
                  <td>
                    <Link href={`blog/${post.id}`}>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle w-12 h-12'>
                            <Image
                              src={`${process.env.STRAPI_API_URL}${url}`}
                              alt={name}
                              width={48}
                              height={48}
                            />
                          </div>
                        </div>
                        <div>
                          <div className='font-bold'>
                            {post.attributes.title}
                          </div>
                          <div className='text-sm opacity-50'>
                            <div className='badge badge-success badge-outline badge-xs'>
                              new
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className={descriptionClass}>{desc}</td>
                  <td>
                    <div className='badge badge-info badge-outline badge-xs mr-1'>
                      cat
                    </div>
                    <div className='badge badge-info badge-outline badge-xs'>
                      category
                    </div>
                  </td>
                </tr>
              )
            })}
        </tbody>
        {/* foot */}
        {/* <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot> */}
      </table>
    </div>
  )
}

export default PostTable
