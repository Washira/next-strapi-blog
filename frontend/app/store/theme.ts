import { create } from 'zustand'
import { themes } from '@/theme'

const hours = new Date().getHours()
const isDayTime = hours > 6 && hours < 18

const useTheme = create((set) => ({
  theme: isDayTime ? themes[0] : themes[1],
  themeList: themes,
  changeTheme: (theme: string) => {
    set({ theme })
    document.cookie = `theme=${theme}`
  },
  isMounted: false,
  lang: 'th',
}))

export default useTheme
