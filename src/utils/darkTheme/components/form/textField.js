import colors from "../../base/colors";

const { borderColor, primary } = colors;

const textField = {
  styleOverrides: {
    root: {
      borderColor: primary.main,
      "&.textFieldBright": {},
      "& .MuiInputBase-root": {
        backgroundColor: "transparent",
      },
      "& .MuiInputAdornment": {
        color: "white",
      },
    },
  },
};
export default textField;
