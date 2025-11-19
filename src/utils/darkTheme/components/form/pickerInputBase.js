import colors from "../../base/colors";
import typography from "../../base/typography";

const { inputBorderColor, grey, primary } = colors;
const { size } = typography;
const pickerInputBase = {
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      fontSize: size.md,
      color: grey.light,
      borderColor: primary.main,
      padding: "0 1rem",
      "&:before": {
        borderBottom: `1.5px solid ${primary.main} !important`,
      },
      "&:after": {
        borderBottom: `2px solid ${primary.focus} !important`,
      },
      "& .MuiInputBase-input": {
        color: "#e6e4ce",
      },
      "& .MuiIconButton-root": {
        padding: "0.5rem",
        // margin:"2rem",
        height: "2rem",
        width: "2rem"
      },
      "& .MuiInputAdornment-root": {
        marginBottom: "6px"
      },
      "& .MuiFormLabel-root": { color: "#e6e4ce" },
      "& .MuiFormLabel-root.Mui-focused": { color: "#fde800ff !important" },
    },
  },
}
export default pickerInputBase