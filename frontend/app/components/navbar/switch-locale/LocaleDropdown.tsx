'use client'

import { useRouter, usePathname } from 'next/navigation'

const LocaleDropdown = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (e: any) => {
    const locale = e.target.value

    // slice the locale from the pathname
    const newUrl = pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
    console.log('newUrl', newUrl)
    router.push(newUrl)
  }

  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='button' className='btn m-1'>
        Languages
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
