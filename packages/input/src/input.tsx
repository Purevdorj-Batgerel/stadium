import { createUseStyles, useTheme } from 'react-jss'
import { Theme } from '@stadium/theme'
import { forwardRef } from 'react'

type classNames = 'container' | 'input'

export interface InputProps {
  id: string
  type: string
  placeholder?: string
}

export type Ref = HTMLInputElement

export const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const { id, type, placeholder } = props

  const theme = useTheme<Theme>()
  const classes = useStyles({ ...props, theme })

  return (
    <div className={classes.container}>
      <input className={classes.input} type={type} id={id} />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  )
})

const useStyles = createUseStyles<classNames, InputProps, Theme>({
  container: {
    position: 'relative',
    marginBottom: '20px',

    '& label': {
      color: '#1e4c82',
      fontSize: '13px',
      fontWeight: 'normal',
      position: 'absolute',
      pointerEvents: 'none',
      left: '15px',
      top: '11px',
      padding: '0 5px',
      background: '#fff',
      transition: '0.2s ease all',
    },
  },
  input: {
    fontSize: '12px',
    display: 'block',
    width: '100%',
    height: '36px',
    padding: '0 20px',
    background: '#fff',
    color: '#323840',
    border: '1px solid #3D85D8',
    borderRadius: '4px',
    boxSizing: 'border-box',

    '&:focus': {
      outline: 'none',
      color: 'red',
      '& ~ label': {
        top: '-8px',
        fontSize: '13px',
      },
    },
  },
})
