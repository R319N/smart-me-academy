import colors from "../../base/colors";
// import typography from "../../base/typography";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

// Material Dashboard 2 React Helper Functions
const { size } = typography;
const { text } = colors;

const cardHeader = {
  styleOverrides: {
    root: {
      margin: 0,
      padding: 0,
    },
    subheader: {
      marginTop: pxToRem(2),
      fontSize: size.xs,
      color: text.secondary,
      fontStyle: "italic"
    },
  },
};

export default cardHeader;
