'use client'

import { ThemeProvider } from 'react-jss'
import { darkTheme } from '@stadium/theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
}
