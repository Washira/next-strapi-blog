'use client'

import { useRouter, usePathname } from 'next/navigation'
import { defaultLocale, locales } from '@/i18n'
import Thai from '@/app/components/navbar/switch-locale/icons/Thai'
import English from '@/app/components/navbar/switch-locale/icons/English'

const LocaleToggle = () => {
  const router = useRouter()
  const pathname = usePathname()
  const splitPathname = pathname.split('/')
  const lang = splitPathname[1]

  const handleLocaleChange = (e: any) => {
    const locale = locales[locales.indexOf(lang) === 0 ? 1 : 0]

    // slice the locale from the pathname
    const newUrl = pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
    console.log('newUrl', newUrl)
    router.push(newUrl)
  }

  return (
    <label className='flex cursor-pointer gap-2 text-sm'>
      <Thai />
      <input
        type='checkbox'
        value='synthwave'
        className='toggle theme-controller'
        checked={lang !== defaultLocale}
        onChange={handleLocaleChange}
      />
      <English />
    </label>
  )
}

export default LocaleToggle
