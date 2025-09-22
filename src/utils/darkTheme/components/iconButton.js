import borders from '../base/borders'
import boxShadows from '../base/boxShadows'
import colors from '../base/colors'

const { borderRadius } = borders
const { text, transparent } = colors

const iconButton = {
  styleOverrides: {
    root: {
      boxShadow: boxShadows.lg,
      borderRadius: borderRadius.md,
      color: text.primary,
      backgroundColor: transparent.main,


      '&:hover': {
        boxShadow: boxShadows.lg,
        color: text.focus,
        backgroundColor: transparent.secondary,
      }
    }
  }
}
export default iconButton
