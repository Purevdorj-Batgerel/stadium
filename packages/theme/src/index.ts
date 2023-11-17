import Tokens from '@stadium/token'

export interface Theme {
  color: {
    background: {
      navbar: string
      elevated: string
    }
    text: {
      default: string
      subtle: string
    }
    border: {
      default: string
      subtle: string
    }
  }
}

export const lightTheme: Theme = {
  color: {
    background: {
      navbar: Tokens.color.neutral_light[100],
      elevated: Tokens.color.neutral_light[300],
    },
    text: {
      default: Tokens.color.neutral_dark[100],
      subtle: Tokens.color.neutral_dark[200],
    },
    border: {
      default: Tokens.color.neutral_dark[100],
      subtle: Tokens.color.neutral_dark[300],
    },
  },
}

export const darkTheme: Theme = {
  color: {
    background: {
      navbar: Tokens.color.neutral_dark[100],
      elevated: Tokens.color.neutral_dark[300],
    },
    text: {
      default: Tokens.color.neutral_light[100],
      subtle: Tokens.color.neutral_light[200],
    },
    border: {
      default: Tokens.color.neutral_light[100],
      subtle: Tokens.color.neutral_light[300],
    },
  },
}
