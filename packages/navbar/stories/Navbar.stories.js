import { Navbar } from '../src/navbar'

export default {
  title: 'Example/Navbar',
  component: Navbar,
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
