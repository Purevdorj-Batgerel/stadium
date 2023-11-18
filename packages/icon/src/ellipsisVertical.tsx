import { FC } from 'react'
import { IconProps } from './iconProps.interface'

export const EllipsisVertical: FC<IconProps> = ({ size = 20, className }) => {
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
        d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
      />
    </svg>
  )
}
