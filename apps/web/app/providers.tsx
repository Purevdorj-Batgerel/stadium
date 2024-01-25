'use client'

// import { ThemeProvider } from 'react-jss'
// import { darkTheme } from '@stadium/theme'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
