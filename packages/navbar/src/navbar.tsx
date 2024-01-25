import { NavbarHeader } from './navbarHeader'
import { NavbarFooter } from './navbarFooter'
import { NavbarItem } from './navbarItem'
import { ReactNode } from 'react'

import { Home, Calendar, LightBulb, Fire, Information } from '@stadium/icon'

interface Item {
  icon: ReactNode
  text: string
}

const items: Item[] = [
  { icon: <Home />, text: 'Your Work' },
  { icon: <Calendar />, text: 'Assets' },
  { icon: <Calendar />, text: 'Pinned Items' },
  { icon: <Calendar />, text: 'Following' },
  { icon: <Calendar />, text: 'Trending' },
  { icon: <LightBulb />, text: 'Challenges' },
  { icon: <Information />, text: 'Spark' },
  { icon: <Fire />, text: 'Codepen Pro' },
]

export const Navbar = () => {
  return (
    <div>
      <NavbarHeader />
      <div>
        {items.map((item: Item) => (
          <NavbarItem key={item.text} icon={item.icon} text={item.text} />
        ))}
      </div>
      <NavbarFooter />
    </div>
  )
}
