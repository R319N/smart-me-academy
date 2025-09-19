import borders from '../../base/borders'
import colors from '../../base/colors'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'

const { inputBorderColor, info, transparent, text , primary} = colors
const { borderRadius } = borders
const { size } = typography
const inputOutlined = {
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      fontSize: size.sm,
      borderRadius: borderRadius.md,

      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: primary.main,
        backgroundColor: "transparent",
      },

      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: primary.main
        }
      }
      
    },

    notchedOutline: {
      borderColor: primary.main
    },

    input: {
      color: text.primary,
      padding: pxToRem(12),
      backgroundColor: transparent.main
    },

    inputSizeSmall: {
      fontSize: size.xs,
      padding: pxToRem(10)
    },

    multiline: {
      color: text.primary,
      padding: 0
    }
  }
}

export default inputOutlined
