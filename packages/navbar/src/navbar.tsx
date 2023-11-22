import { NavbarHeader } from './navbarHeader'
import { NavbarFooter } from './navbarFooter'
import { NavbarItem } from './navbarItem'
import { createUseStyles, useTheme } from 'react-jss'
import { Theme } from '@stadium/theme'
import { ReactNode } from 'react'

import { Home, Calendar, LightBulb, Fire, Information } from '@stadium/icon'

interface Item {
  icon: ReactNode
  text: string
}

type classNames = 'container' | 'content'

interface NavbarProps {}

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

const navbarWidth = 256

export const Navbar = () => {
  const theme = useTheme<Theme>()

  const classes = useStyles({ theme })

  return (
    <div className={classes.container}>
      <NavbarHeader />
      <div className={classes.content}>
        {items.map((item: Item) => (
          <NavbarItem key={item.text} icon={item.icon} text={item.text} />
        ))}
      </div>
      <NavbarFooter />
    </div>
  )
}

const useStyles = createUseStyles<classNames, NavbarProps, Theme>({
  container: ({ theme }) => ({
    marginLeft: '1vw',
    marginTop: '1vw',
    height: 'calc(100% - 2vw)',
    background: theme.color.background.navbar,
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    color: theme.color.text.default,
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    overflow: 'hidden',
    userSelect: 'none',
  }),
  content: ({ theme }) => ({
    margin: '-16px 0',
    padding: '16px 0',
    position: 'relative',
    flex: 1,
    width: navbarWidth,
    // background: 'var(--navbar-dark-primary)',
    boxShadow: `0 0 0 16px ${theme.color.background.navbar}`,
    direction: 'rtl',
    overflowX: 'hidden',
    transition: 'width 0.2s',

    '&::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '99px',
      backgroundColor: '#d62929',
    },

    '&::-webkit-scrollbar-button': {
      height: '16px',
    },
  }),
})
