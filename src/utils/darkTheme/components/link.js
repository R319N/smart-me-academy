import colors from "../base/colors"
import typography from "../base/typography"

const { text, grey , primary} = colors
const { fontWeightBold, fontWeightRegular, size } = typography

const link = {
    styleOverrides: {
        root: {
            textDecoration: "none",
            color: text.primary,
            fontWeight: fontWeightRegular,

            '&:hover': {
                color: primary.main,
                 fontWeight: fontWeightBold,
            }
        }
    }
}

export default link