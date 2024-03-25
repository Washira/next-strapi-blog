import React from 'react'
import Link from 'next/link'
import ThemeToggle from '@/app/components/navbar/theme-controller/ThemeToggle'

const CompactNavBar = () => {
  return (
    <div className='navbar bg-base-100 container lg:hidden'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Link href='#'>Item 1</Link>
            </li>
            <li>
              <Link href='#'>Parent</Link>
              <ul className='p-2'>
                <li>
                  <Link href='#'>Submenu 1</Link>
                </li>
                <li>
                  <Link href='#'>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='#'>Item 3</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-end'>
        <a className='btn btn-ghost text-xl'>Next Sanity Blog</a>
      </div>
    </div>
  )
}

export default CompactNavBar
