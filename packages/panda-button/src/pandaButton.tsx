import { createUseStyles, useTheme } from 'react-jss'
import { Theme } from '@stadium/theme'

type classNames = 'container'

export interface PandaButtonProps {}

export const PandaButton = () => {
  const theme = useTheme<Theme>()
  const classes = useStyles({ theme })

  return <div className={classes.container}>New component</div>
}

const useStyles = createUseStyles<classNames, PandaButtonProps, Theme>({
  container: {},
})
