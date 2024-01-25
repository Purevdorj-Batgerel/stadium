'use client'

import ThemeToggleButton from '@/components/theme-toggle-button'
import { css } from '@/styled-system/css'

export default function Home() {
  return (
    <main>
      <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
        Hello 🐼!
      </div>
      <ThemeToggleButton />
    </main>
  )
}
