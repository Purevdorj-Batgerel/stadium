import { forwardRef } from 'react'

export interface InputProps {
  id: string
  type: string
  placeholder?: string
}

export type Ref = HTMLInputElement

export const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const { id, type, placeholder } = props

  return (
    <div>
      <input type={type} id={id} />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  )
})
