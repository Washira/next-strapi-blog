'use client'

import { useRouter, usePathname } from 'next/navigation'
import { defaultLocale } from '@/i18n'

const LocaleToggle = () => {
  const router = useRouter()
  const pathname = usePathname()
  const splitPathname = pathname.split('/')

  const handleLocaleChange = (e: any) => {
    const locale = e.target.value

    // slice the locale from the pathname
    const newUrl = pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
    console.log('newUrl', newUrl)
    router.push(newUrl)
  }

  return (
    // <div className='dropdown'>
    //   <div tabIndex={0} role='button' className='btn btn-ghost'>
    //     <svg
    //       xmlns='http://www.w3.org/2000/svg'
    //       className='h-5 w-5'
    //       fill='none'
    //       viewBox='0 0 24 24'
    //       stroke='currentColor'
    //     >
    //       <path
    //         strokeLinecap='round'
    //         strokeLinejoin='round'
    //         strokeWidth='2'
    //         d='M4 6h16M4 12h8m-8 6h16'
    //       />
    //     </svg>
    //   </div>
    //   <ul
    //     tabIndex={0}
    //     className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
    //   >
    //     {locales.map((loc) => (
    //       <li key={loc}>
    //         <button
    //           onClick={handleLocaleChange}
    //           value={loc}
    //           className='btn btn-ghost'
    //         >
    //           {loc}
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <label className='flex cursor-pointer gap-2'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='12' cy='12' r='5' />
        <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
      </svg>
      <input
        type='checkbox'
        value='synthwave'
        className='toggle theme-controller'
        checked={splitPathname[1] === defaultLocale}
        onChange={handleLocaleChange}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
      </svg>
    </label>
  )
}

export default LocaleToggle
