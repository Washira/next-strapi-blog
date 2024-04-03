'use client'

import { useRouter, usePathname } from 'next/navigation'

const LocaleDropdown = () => {
  const router = useRouter()
  const pathname = usePathname()
  const splitPathname = pathname.split('/')
  let lang
  switch (splitPathname[1]) {
    case 'en':
      lang = 'English'
      break
    case 'th':
      lang = 'ไทย'
      break
    default:
      lang = 'ไทย'
  }

  const handleLocaleChange = (e: any) => {
    const locale = e.target.value

    // slice the locale from the pathname
    const newUrl = pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
    router.push(newUrl)
  }

  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='button' className='btn m-1 w-36 btn-ghost'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802'
          />
        </svg>

        {lang}
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
      >
        <li>
          <input
            type='radio'
            name='theme-dropdown'
            className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
            aria-label='Thai'
            value='th'
            onClick={handleLocaleChange}
          />
        </li>
        <li>
          <input
            type='radio'
            name='theme-dropdown'
            className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
            aria-label='English'
            value='en'
            onClick={handleLocaleChange}
          />
        </li>
      </ul>
    </div>
  )
}

export default LocaleDropdown
