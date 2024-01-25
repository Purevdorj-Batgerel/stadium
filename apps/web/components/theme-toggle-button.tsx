'use client'

import { css } from '@/styled-system/css'
import { useTheme } from 'next-themes'

function useThemeSwitch() {
  const theme = useTheme()
  const { setTheme, resolvedTheme } = theme
  const isDark = resolvedTheme === 'dark'

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')
  const iconText = isDark ? 'Dark' : 'Light'

  return {
    iconText,
    toggleTheme,
  }
}

export default function ThemeToggleButton() {
  const { toggleTheme, iconText } = useThemeSwitch()

  return (
    <button
      onClick={toggleTheme}
      className={css({
        px: '2',
        py: '1',
        textStyle: 'xl',
        fontWeight: 'semibold',
        letterSpacing: 'tight',
        rounded: 'md',
        bg: 'red',
      })}
    >
      <span>{iconText} </span>
    </button>
  )
}
