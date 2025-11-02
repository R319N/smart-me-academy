import colors from '../base/colors'
import pxToRem from '../functions/pxToRem'
const { text } = colors

const icon = {
  defaultProps: {
    baseClassName: 'material-icons-round',
    fontSize: 'inherit',
    color: text.secondary
  },

  styleOverrides: {
    root: {
      color: text.secondary,
    },

    fontSizeInherit: {
      fontSize: 'inherit !important',

    },

    fontSizeSmall: {
      fontSize: `${pxToRem(20)} !important`
    },

    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`
    }
  }
}
export default icon
