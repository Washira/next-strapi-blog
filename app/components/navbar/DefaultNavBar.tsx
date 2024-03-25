import React from 'react'
import Link from 'next/link'
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
          <li>
            <Link href='#'>Item 1</Link>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className='p-2 menu-md w-56'>
                <li>
                  <Link href='#'>Submenu 1</Link>
                </li>
                <li>
                  <Link href='#'>Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href='#'>Item 3</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <ThemeSwap />
      </div>
    </div>
  )
}

export default DefaultNavBar
