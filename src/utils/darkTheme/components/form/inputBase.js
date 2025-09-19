// import zIndex from "@mui/material/styles/zIndex";
import colors from "../../base/colors";
import typography from "../../base/typography";

const { inputBorderColor, grey, primary } = colors;
const { size } = typography;

const inputBase = {
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      fontSize: size.sm,
      color: grey.light,
      borderColor: primary.main,
      padding: "0.3rem 1rem",
      "&:hover": {},

      "& .MuiOutlinedInput-notchedOutline, &:before": {
        borderColor: primary.main,
        color: grey.light,
        backgroundColor: "transparent",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: primary.main,
      },
      "& .MuiNotchedOutline": {
        borderColor: primary.main,
      },
      "& .MuiFormLabel-root-MuiInputLabel-root": {
        color: grey.light,
      },
    },
  },
};
export default inputBase;
