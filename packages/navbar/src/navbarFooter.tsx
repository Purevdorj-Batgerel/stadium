import { ChevronUp } from '@stadium/icon'

export const NavbarFooter = () => {
  const Icon = ChevronUp
  return (
    <div>
      <div>
        <div>
          <img src='https://gravatar.com/avatar' />
        </div>
        <div>
          <a
            id='nav-footer-title'
            href='https://codepen.io/uahnbu/pens/public'
            target='_blank'
          >
            Purvee
          </a>
          <span>Admin</span>
        </div>

        <Icon />
      </div>
      <div>
        <span>
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
    </div>
  )
}
