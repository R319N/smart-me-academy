import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, SelectChangeEvent } from "@mui/material";
import React from "react";
import { EnrollmentFormData } from "../../../types";
import CustomSelect from "../CustomizedComponents/custom-select";
import { Female } from "@mui/icons-material";

interface Props {
  formData: EnrollmentFormData;
  setFormData: React.Dispatch<React.SetStateAction<EnrollmentFormData>>;
  errors: Record<string, string>;
}
const grades = Array.from({ length: 12 }, (_, i) => i + 1)
const StudentDetails: React.FC<Props> = ({ formData, setFormData, errors }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    const target = e.target as (HTMLInputElement & { name?: string; value: string }) | { name?: string; value: unknown };
    if (!target.name) return;

    // Strict type assertion based on EnrollmentFormData
    setFormData((prev) => ({
      ...prev,
      [target.name as string]: target.value,
    }));
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>First Name</InputLabel>
        <TextField
          variant="standard"
          fullWidth
          name="firstName"
          placeholder="Please Enter Student's First Name"
          value={formData.firstName}
          onChange={handleChange}
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>Surname</InputLabel>
        <TextField
          variant="standard"
          fullWidth
          name="surname"
          placeholder="Please Enter Student's Last Name"
          value={formData.surname}
          onChange={handleChange}
          error={!!errors.surname}
          helperText={errors.surname}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>Date of Birth</InputLabel>
        <TextField
          variant="standard"
          fullWidth
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          error={!!errors.dob}
          helperText={errors.dob}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>ID / Passport</InputLabel>
        <TextField
          variant="standard"
          fullWidth
          name="idOrPassport"
          placeholder="Enter ID or Passport Number"
          value={formData.idOrPassport}
          onChange={handleChange}
          error={!!errors.idOrPassport}
          helperText={errors.idOrPassport}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        {/* <CustomSelect
          variant="standard"
          label="Gender"
          value={formData.gender}
          // placeholder="male"
           setValue={(val) => handleChange(formData.gender)}
          options={["male", "Female"]}
          error={!!errors.gender}  // Pass error status
          helperText={errors.gender}  // Pass the error message

        /> */}
        <FormControl fullWidth error={!!errors.gender}>
          <InputLabel>Gender</InputLabel>
          <Select variant="standard" name="gender" value={formData.gender} onChange={handleChange}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        <FormControl fullWidth error={!!errors.grade}>
          <InputLabel>Grade</InputLabel>
          <Select name="grade" value={formData.grade} onChange={handleChange}>
            <MenuItem>R</MenuItem>
            {grades.map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}

            {/* Add remaining grades as needed  */}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default StudentDetails;
