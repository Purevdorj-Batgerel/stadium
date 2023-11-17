import { createUseStyles, useTheme } from 'react-jss'
import { Theme } from '@stadium/theme'
import { ReactNode } from 'react'

type classNames = 'item'

export interface NavbarItemProps {
  text: string
  icon: ReactNode
}

export const NavbarItem = (props: NavbarItemProps) => {
  const { text, icon } = props
  const theme = useTheme<Theme>()
  const classes = useStyles({ ...props, theme })
  return (
    <div className={classes.item}>
      {icon}
      <span>{text}</span>
    </div>
  )
}

const useStyles = createUseStyles<classNames, NavbarItemProps, Theme>({
  item: ({ theme }) => ({
    position: 'relative',
    marginLeft: '16px',
    height: '54px',
    display: 'flex',
    alignItems: 'center',
    direction: 'ltr',
    cursor: 'pointer',
    zIndex: 1,
    transition: 'color 0.2s',
    '& span': {
      transition: 'opacity 1s',
    },
    '&:hover': {
      color: 'red',
    },
  }),
})
