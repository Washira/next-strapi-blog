import 'server-only'
// import { Locale } from '@/i18n-config'

// interface Dictionary {
//   [key: string]: string
// }

// type Dictionary = {
//   locale: { [key: string]: string }
// }

const dictionaries = {
  th: () => import('../lang/th.json').then((module) => module.default),
  en: () => import('../lang/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: unknown) => dictionaries[locale]()
