import colors from '../../base/colors'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'
import rgba from '../../functions/rgba'

const { size, fontWeightRegular, fontWeightBold } = typography
const { white, primary, text } = colors

const stepLabel = {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs,
      color: text.secondary,

      '&.Mui-active': {
        fontWeight: `${fontWeightBold} !important`,
        color: `${rgba(primary.main, 0.8)} !important`
      },

      '&.Mui-completed': {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(primary.main, 0.8)} !important`
      }
    }
  }
}

export default stepLabel
