import { Input } from '../src/input'

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    type: 'text',
    placeholder: 'placeholder',
  },
}
