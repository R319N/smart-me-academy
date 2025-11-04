import colors from '../../base/colors'
import typography from '../../base/typography'

const { text, grey, primary } = colors
const { fontWeightMedium, fontWeightLight, size } = typography
const listItemtext = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      // color: "green",
      fontWeight: fontWeightLight,
      fontSize: size.sm
    },
    primary:{
      color: primary.main,
      fontWeight: fontWeightMedium,
      fontSize: size.sm
    },  
    secondary: {
      color: text.secondary,
      fontWeight: fontWeightLight,
      textTransform: 'lowercase',
      fontSize: size.sm
    }
  }
}
export default listItemtext
