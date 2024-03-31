import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className='hero min-h-screen'
      // style={{
      //   backgroundImage:
      //     'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
      // }}
    >
      <div className='hero-overlay bg-opacity-100'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Not Found</h1>
          <p className='mb-5'>No page found. Go back to </p>
          <Link className='btn btn-primary' role='button' href='/'>
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
