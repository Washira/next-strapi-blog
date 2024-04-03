import Link from 'next/link'
import { useTranslations } from 'next-intl'
import menu from '@/app/[locale]/utils/menu'
import ThemeToggle from '@/app/components/navbar/theme-controller/ThemeToggle'
import LocaleToggle from '@/app/components/navbar/switch-locale/LocaleToggle'

const CompactNavBar = ({ params }: { params: { locale: string } }) => {
  const { locale } = params
  const t = useTranslations('navbar')
  return (
    <div className='navbar bg-base-100 container lg:hidden pl-0 pr-4'>
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
            {menu.map((item) => (
              <li key={item.title}>
                {item?.subdirectory ? (
                  <details>
                    <summary>{t(`${item.title}`)}</summary>
                    <ul className='p-2'>
                      {item.subdirectory.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            href={subItem ? `/${locale}${subItem.url}` : '#'}
                          >
                            {t(`${subItem.title}`)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.url ? `/${locale}${item.url}` : '#'}>
                    {t(`${item.title}`)}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
            <li>
              <LocaleToggle />
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-end'>
        <Link href='/' className='text-xl'>
          {t('title')}
        </Link>
      </div>
    </div>
  )
}

export default CompactNavBar
