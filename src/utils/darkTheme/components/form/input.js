// import borders from "../../base/borders";
import colors from "../../base/colors";
// import typography from "../../base/typography";

// Material Kit 2 React Base Styles

const { info, inputBorderColor, dark, primary} = colors;
// const { size } = typography;
// const { borderWidth } = borders;

const input = {
  styleOverrides: {
    root: {
      "&& .MuiInput-root:hover::before ": {
        borderColor: "red",
      },
    },
    underline: {
      "&:before": {
        borderBottom: `2px solid ${primary.main}`,
      
      },
      "&:hover": {
        borderBottom: `2px solid ${primary.focus}`,
      },
    },
  },
};
export default input;
