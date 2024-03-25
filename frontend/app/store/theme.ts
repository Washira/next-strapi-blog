import { create } from 'zustand'

const hours = new Date().getHours()
const isDayTime = hours > 6 && hours < 20

const useTheme = create((set) => ({
  theme: isDayTime ? 'light' : 'night',
  themeList: ['light', 'night'],
}))

export default useTheme
