import { NavbarHeader } from './navbarHeader'
import { NavbarFooter } from './navbarFooter'
import { NavbarItem } from './navbarItem'
import { createUseStyles, useTheme } from 'react-jss'
import { Theme } from '@stadium/theme'

interface Item {
  class: string
  text: string
}

type classNames = 'container' | 'content'

interface NavbarProps {}

const items: Item[] = [
  { class: 'fa-palette', text: 'Your Work' },
  { class: 'fa-images', text: 'Assets' },
  { class: 'fa-thumbtack', text: 'Pinned Items' },
  { class: 'fa-heart', text: 'Following' },
  { class: 'fa-chart-line', text: 'Trending' },
  { class: 'fa-fire', text: 'Challenges' },
  { class: 'fa-magic', text: 'Spark' },
  { class: 'fa-gem', text: 'Codepen Pro' },
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
          <NavbarItem customClass={item.class} text={item.text} />
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
