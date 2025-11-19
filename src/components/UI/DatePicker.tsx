"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CalendarMonth } from "@mui/icons-material";

interface DatePickerInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function DatePickerInput({
  label = "Date of Birth",
  value,
  onChange,
  error,
}: DatePickerInputProps) {
  const parsedValue: Dayjs | null = value ? dayjs(value) : null;

  const [focused, setFocused] = useState(false);

  const isEmpty = !value;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={parsedValue}
        onChange={(newValue) =>
          onChange(newValue ? newValue.format("YYYY-MM-DD") : "")
        }
        slots={{ openPickerIcon: CalendarMonth }}
        slotProps={{
          textField: {
            label,
            variant: "standard",
            fullWidth: true,
            error: !!error,
            helperText: error,
            InputLabelProps: { shrink: true },

            placeholder: focused ? "Select date" : "",

            inputProps: {
              onFocus: () => setFocused(true),
              onBlur: () => setFocused(false),
            },

            sx: {
              // ⭐ Hide dd/mm/yyyy ONLY when empty and not focused
              "& .MuiInputBase-input": {
                color: isEmpty && !focused ? "transparent" : "inherit",
              },

              // ⭐ Force your placeholder to be visible only when focused
              "& .MuiInputBase-input::placeholder": {
                opacity: focused ? 1 : 0,
                transition: "opacity 0.2s",
              },

              // Calendar icon style
              "& .MuiSvgIcon-root": {
                color: (theme) => theme.palette.text.secondary,
                fontSize: "18px",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
