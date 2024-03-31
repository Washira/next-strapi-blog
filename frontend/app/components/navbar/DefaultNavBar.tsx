import Link from 'next/link'
import { useTranslations } from 'next-intl'
import menu from '@/app/[locale]/utils/menu'
import ThemeSwap from '@/app/components/navbar/theme-controller/ThemeSwap'
import LocaleDropdown from '@/app/components/navbar/switch-locale/LocaleDropdown'

const DefaultNavBar = ({ params }: { params: { locale: string } }) => {
  const { locale } = params
  const t = useTranslations('navbar')
  return (
    <div className='navbar bg-base-100 container hidden lg:flex px-0'>
      <div className='navbar-start'>
        <Link href='/' className='text-xl'>
          {t('title')}
        </Link>
      </div>
      <div className='navbar-center'>
        <div className='px-1 flex items-center gap-4'>
          {menu.map((item) => (
            <div key={item.title}>
              {item?.subdirectory ? (
                <div className='dropdown dropdown-end'>
                  <div role='button' tabIndex={0} className='m-1'>
                    {t(`${item.title}`)}
                  </div>
                  <ul
                    tabIndex={0}
                    className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
                  >
                    {item.subdirectory.map((subItem) => (
                      <li key={subItem.title}>
                        <Link href={subItem ? `/${locale}${subItem.url}` : '#'}>
                          {t(`${subItem.title}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link href={item.url ? `/${locale}${item.url}` : '#'}>
                  {t(`${item.title}`)}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='navbar-end'>
        <LocaleDropdown />
        <ThemeSwap />
      </div>
    </div>
  )
}

export default DefaultNavBar
