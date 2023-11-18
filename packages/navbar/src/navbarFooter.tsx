import { createUseStyles, useTheme } from 'react-jss'
import { Theme } from '@stadium/theme'
import { ChevronUp, ChevronDown } from '@stadium/icon'

type classNames =
  | 'container'
  | 'heading'
  | 'avatar'
  | 'title'
  | 'subtitle'
  | 'content'

interface NavbarFooterProps {}

const navbarWidth = 256

export const NavbarFooter = () => {
  const theme = useTheme<Theme>()
  const classes = useStyles({ theme })

  const Icon = ChevronUp
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <div className={classes.avatar}>
          <img src='https://gravatar.com/avatar' />
        </div>
        <div className={classes.title}>
          <a
            id='nav-footer-title'
            href='https://codepen.io/uahnbu/pens/public'
            target='_blank'
          >
            Purvee
          </a>
          <span className={classes.subtitle}>Admin</span>
        </div>

        <Icon />
      </div>
      <div className={classes.content}>
        <span>
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
    </div>
  )
}

const useStyles = createUseStyles<classNames, NavbarFooterProps, Theme>({
  container: ({ theme }) => ({
    position: 'relative',
    width: navbarWidth,
    height: '54px',
    background: theme.color.background.elevated,
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
    transition: 'width 0.2s, height 0.2s',

    '& a': {
      color: 'inherit',
      textDecoration: 'inherit',
    },
  }),
  heading: {
    position: 'relative',
    width: '100%',
    height: '54px',
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: '16px',
    },
  },
  avatar: {
    position: 'relative',
    margin: '11px 0 11px 16px',
    left: 0,
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    overflow: 'hidden',
    transform: 'translate(0)',
    transition: '0.2s',

    '& img': {
      height: '100%',
    },
  },
  title: {
    flex: '1',
    position: 'relative',
    marginLeft: '16px',
    width: '10px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'opacity 1s',
  },
  subtitle: ({ theme }) => ({
    color: theme.color.text.subtle,
    fontSize: '0.6rem',
  }),
  content: ({ theme }) => ({
    margin: '0 16px 16px 16px',
    borderTop: `solid 1px ${theme.color.border.subtle}`,
    padding: '16px 0',
    color: theme.color.text.subtle,
    fontSize: '.8rem',
    overflow: 'auto',

    '&::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '99px',
      backgroundColor: '#D62929',
    },
  }),
})
