import Link from 'next/link'
import { useTranslations } from 'next-intl'
import menu from '@/app/utils/menu'
import ThemeSwap from '@/app/components/navbar/theme-controller/ThemeSwap'
import LocaleDropdown from '@/app/components/navbar/switch-locale/LocaleDropdown'

const DefaultNavBar = ({ params }: { params: { locale: string } }) => {
  // console.log('params', params)
  const t = useTranslations('Index')
  const lang = 'en'
  return (
    <div className='navbar bg-base-100 container hidden lg:flex px-0'>
      <div className='navbar-start'>
        <Link href='/' className='text-xl'>
          {t('title')}
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
                        <Link href={subItem ? `/${lang}${subItem.url}` : '#'}>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link href={item.url ? `/${lang}${item.url}` : '#'}>
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <LocaleDropdown />
      <div className='navbar-end'>
        <ThemeSwap />
      </div>
    </div>
  )
}

export default DefaultNavBar
