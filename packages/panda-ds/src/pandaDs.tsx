import { createUseStyles, useTheme } from 'react-jss'
import { Theme } from '@stadium/theme'

type classNames = 'container'

export interface PandaDsProps {}

export const PandaDs = () => {
  const theme = useTheme<Theme>()
  const classes = useStyles({theme})

  return (
    <div className={classes.container}>New component</div>
  )
}

const useStyles = createUseStyles<classNames, PandaDsProps, Theme>({
  container: {}
})