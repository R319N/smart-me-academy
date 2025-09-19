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
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      boxShadow: primary.main,

      '&.MuiPaper-root': {
        backgroundColor: transparent.main
      }
    }
  }
}

export default stepper
