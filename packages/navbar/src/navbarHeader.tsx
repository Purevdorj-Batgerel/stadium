import { createUseStyles, useTheme } from 'react-jss'
import { Theme } from '@stadium/theme'
import { ChevronLeft } from '@stadium/icon'

type classNames = 'navHeader' | 'navTitle' | 'separator'

interface NavbarHeaderProps {}

const navbarWidth = 256

export const NavbarHeader = () => {
  const theme = useTheme<Theme>()
  const classes = useStyles({ theme })

  const Icon = <ChevronLeft />
  return (
    <>
      <div className={classes.navHeader}>
        <a className={classes.navTitle} href='#' target='_blank'>
          APPNAME
        </a>
        {Icon}
      </div>
      <hr className={classes.separator} />
    </>
  )
}

const useStyles = createUseStyles<classNames, NavbarHeaderProps, Theme>({
  navHeader: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 16px',
    width: `calc(${navbarWidth} - 16px)`,
    minHeight: '80px',
    alignItems: 'center',
    transition: 'width 0.2s',

    '& a': { color: 'inherit', textDecoration: 'inherit' },
  },
  navTitle: {
    fontSize: '1.5rem',
    transition: 'opacity 1s',
  },
  separator: ({ theme }) => ({
    width: '80%',
    margin: '0 auto',
    borderColor: theme.color.border.subtle,
  }),
})
