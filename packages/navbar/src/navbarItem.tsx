import { ReactNode } from 'react'

export interface NavbarItemProps {
  text: string
  icon: ReactNode
}

export const NavbarItem = (props: NavbarItemProps) => {
  const { text, icon } = props
  return (
    <div>
      {icon}
      <span>{text}</span>
    </div>
  )
}
