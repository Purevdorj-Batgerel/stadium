import { Navbar } from '../src/navbar'

export default {
  title: 'Example/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    customClass: 'Button',
    text: 'Test text',
  },
}
