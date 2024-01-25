import { forwardRef } from 'react'

export interface ButtonProps {
  label: string
  spacing?: number
  fontWeight?: string
  labelColor?: string
}

export type Ref = HTMLButtonElement

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  return (
    <button type='button' className={} ref={ref}>
      {props.label}
    </button>
  )
})
