import Link from 'next/link'

const PostTable = ({ data }: any) => {
  const posts = data?.data

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item: any, i: string) => {
            return (
              <tr key={i}>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img
                          // src='/tailwind-css-component-profile-2@56w.png'
                          src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                          alt='Avatar Tailwind CSS Component'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>Hart Hagerty</div>
                      <div className='text-sm opacity-50'>United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className='badge badge-ghost badge-sm'>
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <Link href={`/blog/${item.id}`}>
                    <button className='btn btn-ghost btn-xs'>read</button>
                  </Link>
                </th>
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
