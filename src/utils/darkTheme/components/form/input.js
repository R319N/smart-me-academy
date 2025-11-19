import colors from "../../base/colors";
import typography from "../../base/typography";

const { grey, primary, success, error} = colors;
const { size } = typography;

const inputTheme = {
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      fontSize: size.md,
      color: grey.light,
      padding: "0 1rem",

      // Input text
      "& .MuiInputBase-input": {
        color: "#e6e4ce",
      },

      // Icon button (calendar / picker)
      "& .MuiIconButton-root": {
        padding: "0.5rem",
        height: "2rem",
        width: "2rem",
      },

      // Adornment spacing
      "& .MuiInputAdornment-root": {
        marginBottom: "6px",
      },

      /* -----------------------
       *  Label Styles
       * ----------------------*/
      "& .MuiFormLabel-root": {
        color: "#e6e4ce",
      },
      "& .MuiFormLabel-root.Mui-focused": {
        color: `${primary.focus} !important`,
      },
      // Error label
      "& .MuiFormLabel-root.Mui-error": {
        color: `${error.main} !important`,
      },
      "& .MuiFormLabel-root.Mui-focused.Mui-error": {
        color: `${error.main} !important`,
      },
      // Success label
      "&.Mui-success .MuiFormLabel-root": {
        color: `${success.main} !important`,
      },
      "&.Mui-success .MuiFormLabel-root.Mui-focused": {
        color: `${success.main} !important`,
      },

      /* -----------------------
       *  Underline / Borders
       * ----------------------*/
      "&:before": {
        borderBottom: `1.5px solid ${primary.main} !important`,
      },
      "&:after": {
        borderBottom: `2px solid ${primary.focus} !important`,
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottomColor: `${primary.focus} !important`,
      },

      // Error underline
      "&.Mui-error:before": {
        borderBottomColor: `${error.main} !important`,
      },
      "&.Mui-error:after": {
        borderBottomColor: `${error.main} !important`,
      },
      "&.Mui-error:hover:not(.Mui-disabled):before": {
        borderBottomColor: `${error.main} !important`,
      },

      // Success underline
      "&.Mui-success:before": {
        borderBottomColor: `${success.main} !important`,
      },
      "&.Mui-success:after": {
        borderBottomColor: `${success.main} !important`,
      },
      "&.Mui-success:hover:not(.Mui-disabled):before": {
        borderBottomColor: `${success.main} !important`,
      },
    },

    underline: {
      // Just to ensure standard variant works consistently
      "&:before": {
        borderBottom: `1.5px solid ${primary.main} !important`,
      },
      "&:after": {
        borderBottom: `2px solid ${primary.focus} !important`,
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottomColor: `${primary.focus} !important`,
      },
      // Error
      "&.Mui-error:before": { borderBottomColor: `${error.main} !important` },
      "&.Mui-error:after": { borderBottomColor: ` ${error.main} !important` },
      "&.Mui-error:hover:not(.Mui-disabled):before": { borderBottomColor: "red !important" },
      // Success
      "&.Mui-success:before": { borderBottomColor: `${success.main} !important` },
      "&.Mui-success:after": { borderBottomColor: `${success.main} !important` },
      "&.Mui-success:hover:not(.Mui-disabled):before": { borderBottomColor: `${success.main} !important` },
    },
  },
};

export default inputTheme;
