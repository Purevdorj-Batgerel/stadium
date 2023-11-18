import { FC } from 'react'
import { IconProps } from './iconProps.interface'

export const CheckMark: FC<IconProps> = ({ size = 20, className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      width={size}
      height={size}
      className={className}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.5 12.75l6 6 9-13.5'
      />
    </svg>
  )
}
