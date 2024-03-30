'use client'

import { useRouter, usePathname } from 'next/navigation'
import { defaultLocale, locales } from '@/i18n'

const LocaleToggle = () => {
  const router = useRouter()
  const pathname = usePathname()
  const splitPathname = pathname.split('/')
  const lang = splitPathname[1]

  const handleLocaleChange = (e: any) => {
    // const locale = e.target.value
    const locale = locales[locales.indexOf(lang) === 0 ? 1 : 0]
    // console.log('locale', locale)

    // slice the locale from the pathname
    const newUrl = pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
    console.log('newUrl', newUrl)
    router.push(newUrl)
  }

  return (
    <label className='flex cursor-pointer gap-2 text-sm'>
      <div className='badge badge-outline badge-xs'>Th</div>
      <input
        type='checkbox'
        value='synthwave'
        className='toggle theme-controller'
        checked={lang !== defaultLocale}
        onChange={handleLocaleChange}
      />
      <div className='badge badge-outline badge-xs'>En</div>
    </label>
  )
}

export default LocaleToggle
