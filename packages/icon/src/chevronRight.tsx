import { FC } from 'react'
import { IIconComponent } from './icon.interface'

export const ChevronRight: FC<IIconComponent> = ({ size = 20 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      width={size}
      height={size}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M8.25 4.5l7.5 7.5-7.5 7.5'
      />
    </svg>
  )
}
