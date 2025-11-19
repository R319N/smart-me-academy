import colors from "../../base/colors";
import typography from "../../base/typography";

const { inputBorderColor, grey, primary, success, error} = colors; // success color added
const { size } = typography;

const pickerInputBase = {
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      fontSize: size.md,
      color: grey.light,
      padding: "0 1rem",

      // Default underline
      "&:before": {
        borderBottom: `1.5px solid ${primary.main} !important`,
      },

      // Focus underline
      "&:after": {
        borderBottom: `2px solid ${primary.focus} !important`,
      },

      // Input text color
      "& .MuiInputBase-input": {
        color: "#e6e4ce",
      },

      // Icon button
      "& .MuiIconButton-root": {
        padding: "0.5rem",
        height: "2rem",
        width: "2rem",
      },

      // Adornment spacing
      "& .MuiInputAdornment-root": {
        marginBottom: "6px",
      },

      // Default label
      "& .MuiFormLabel-root": {
        color: "#e6e4ce",
      },

      // Focus label
      "& .MuiFormLabel-root.Mui-focused": {
        color: `${primary.focus} !important`,
      },

      /* -----------------------
       *  ❌ ERROR STATE
       * ----------------------*/
      "& .MuiFormLabel-root.Mui-error": {
        color: ` ${error.main} !important`,
      },

      "& .MuiFormLabel-root.Mui-focused.Mui-error": {
        color:`${error.main} !important` ,
      },

      "&.Mui-error:before": {
        borderBottomColor:`${error.main} !important`,
      },

      "&.Mui-error:after": {
        borderBottomColor: `${error.main} !important`,
      },

      "&.Mui-error:hover:not(.Mui-disabled):before": {
        borderBottomColor: `${error.main} !important`,
      },

      /* -----------------------
       *  ✅ SUCCESS STATE
       * ----------------------*/
      "&.Mui-success .MuiFormLabel-root": {
        color: `${success.main} !important`,
      },

      "&.Mui-success .MuiFormLabel-root.Mui-focused": {
        color: `${success.main} !important`,
      },

      // Underline (default)
      "&.Mui-success:before": {
        borderBottomColor: `${success.main} !important`,
      },

      // Underline (focused)
      "&.Mui-success:after": {
        borderBottomColor: `${success.main} !important`,
      },

      // Underline (hover)
      "&.Mui-success:hover:not(.Mui-disabled):before": {
        borderBottomColor: `${success.main} !important`,
      },
    },
  },
};

export default pickerInputBase;
