import { Height } from "@mui/icons-material";
import colors from "../../base/colors";
import typography from "../../base/typography";
const { size } = typography;

const { primary, text } = colors;

const input = {
  styleOverrides: {
    root: {
      // Hover underline for standard variant
      "&.MuiInput-root:hover:not(.Mui-disabled):before": {
        borderBottomColor: primary.focus,
      },

      // Input text color
      "& .MuiInputBase-input": {
        color: "#e6e4ce",
        height: "20px"
      },

      // Label color
      "& .MuiFormLabel-root": {
        color: "#e6e4ce",
      },
      "& .MuiFormLabel-root.Mui-focused": {
        color: primary.main,
      },

      // Calendar / icon color (optional)
      "& .MuiSvgIcon-root": {
        color: text.secondary,
        // height: "4px",
        fontSize:"18px"
      },
    },

    underline: {
      // Default underline
      "&:before": {
        borderBottom: `1.5px solid ${primary.main} !important`,
      },

      // Hover underline
      "&:hover:not(.Mui-disabled):before": {
        borderBottomColor: `${primary.focus} !important`,
      },

      // Focused underline
      "&:after": {
        borderBottomColor: `${primary.focus} !important`,
      },
    },
  },
};

export default input;
