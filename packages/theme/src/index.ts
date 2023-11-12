import Tokens from '@stadium/token'

export interface Theme {
  background: string
}

export const lightTheme: Theme = { background: Tokens.color.neutral_light[100] }

export const darkTheme: Theme = { background: Tokens.color.neutral_dark[100] }
