import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectProps,
} from "@mui/material";
import React from "react";

// Define the types for the props
interface CustomSelectProps<T> {
  label: string;
  size?:SelectProps["size"],
  value: T;
  setValue: (value: T) => void;
  options: T[];
  variant?: SelectProps["variant"]; 
  error?: boolean; // Add error prop
  helperText?: string; // Add helperText prop 
}

const CustomSelect = <T extends string | number>({
  label,
  value,
  size="small",
  setValue,
  options,
  variant = "outlined", // Default to 'outlined'
  error = false, // Default to no error
  helperText = "", // Default to no helper text
}: CustomSelectProps<T>) => {
  return (
    <FormControl fullWidth variant={variant} error={error}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        value={value}
        id={`${label}-select`}
        label={label}
        size={size}
        onChange={(e) => setValue(e.target.value as T)}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option} sx={{ justifyContent: "start" }}>
            {option}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>} {/* Conditionally render helperText */}
    </FormControl>
  );
};

export default CustomSelect;
