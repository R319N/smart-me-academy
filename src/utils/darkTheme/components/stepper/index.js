import borders from '../../base/borders'
import boxShadows from '../../base/boxShadows'
import colors from '../../base/colors'
import linearGradient from '../../functions/linearGradient'
import pxToRem from '../../functions/pxToRem'

// Material Dashboard 2 React base styles

const { transparent, primary} = colors
const { borderRadius } = borders
const { colored } = boxShadows

const stepper = {
  styleOverrides: {
    root: {
      width : "100%",
      padding: `${pxToRem(24)} ${pxToRem(0)}`,
      borderRadius: borderRadius.lg,
      boxShadow: primary.main,

      '&.MuiPaper-root': {
        backgroundColor: transparent.main
      }
    }
  }
}

export default stepper
