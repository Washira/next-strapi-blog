import React from 'react'
import Link from 'next/link'
import menu from '@/app/utils/menu'
import ThemeSwap from '@/app/components/navbar/theme-controller/ThemeSwap'

const DefaultNavBar = () => {
  return (
    <div className='navbar bg-base-100 container hidden lg:flex'>
      <div className='navbar-start'>
        <Link href='/' className='btn btn-ghost text-xl'>
          Next Sanity Blog
        </Link>
      </div>
      <div className='navbar-center flex'>
        <ul className='menu menu-horizontal px-1'>
          {menu.map((item) => (
            <li key={item.title}>
              {item?.subdirectory ? (
                <details>
                  <summary>{item.title}</summary>
                  <ul className='p-2 menu-md w-56 z-10'>
                    {item.subdirectory.map((subItem) => (
                      <li key={subItem.title}>
                        <Link href={subItem ? subItem.url : '#'}>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link href={item.url ? item.url : '#'}>{item.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end'>
        <ThemeSwap />
      </div>
    </div>
  )
}

export default DefaultNavBar
