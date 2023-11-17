import { NavbarItem } from '../src/navbarItem'

export default {
  title: 'Example/NavbarItem',
  component: NavbarItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Primary = {
  args: {
    customClass: 'Button',
    text: 'Test text',
  },
}
