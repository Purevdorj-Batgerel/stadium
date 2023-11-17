import { forwardRef } from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Theme } from '@stadium/theme'

type classNames = 'button'

export interface ButtonProps {
  label: string
  spacing?: number
  fontWeight?: string
  labelColor?: string
}

export type Ref = HTMLButtonElement

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const theme = useTheme<Theme>()
  const classes = useStyles({ ...props, theme })
  return (
    <button type='button' className={classes.button} ref={ref}>
      {props.label}
    </button>
  )
})

const useStyles = createUseStyles<classNames, ButtonProps, Theme>({
  button: ({ theme, ...props }) => ({
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    display: 'block',
    fontWeight: props.fontWeight || 'bold',
    backgroundColor: theme.color.background.elevated,
  }),
})
