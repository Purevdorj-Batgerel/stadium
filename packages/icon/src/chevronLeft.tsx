import { FC } from 'react'
import { IIconComponent } from './icon.interface'

export const ChevronLeft: FC<IIconComponent> = ({ size = 20 }) => {
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
        d='M15.75 19.5L8.25 12l7.5-7.5'
      />
    </svg>
  )
}
