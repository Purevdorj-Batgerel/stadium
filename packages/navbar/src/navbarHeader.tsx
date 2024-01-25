import { ChevronLeft } from '@stadium/icon'

export const NavbarHeader = () => {
  const Icon = <ChevronLeft />
  return (
    <>
      <div>
        <a href='#' target='_blank'>
          APPNAME
        </a>
        {Icon}
      </div>
      <hr />
    </>
  )
}
