import { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('Component', {
    description: 'creates a new Component workspace in packages directory',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new file to create?',
        validate: (input: string) => {
          if (input.includes('.')) {
            return 'file name cannot include an extension'
          }
          if (!input) {
            return 'file name is required'
          }
          return true
        },
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: '{{ turbo.paths.root }}/packages/{{ dashCase name }}',
        base: 'templates/component',
        templateFiles: 'templates/component/**/*.hbs',
      },
    ],
  })
}
