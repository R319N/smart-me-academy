import { Grid, TextField, InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import React from "react";

interface Props {
  formData: {
    firstName: string;
    surname: string;
    gender: string;
    dob: string;
    grade: string;
    idOrPassport: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  errors: { [key: string]: string };
}

const StudentDetails: React.FC<Props> = ({ formData, setFormData, errors }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>First Name</InputLabel>
        <TextField
          fullWidth
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>Surname</InputLabel>
        <TextField
          fullWidth
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          error={!!errors.surname}
          helperText={errors.surname}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>Date of Birth</InputLabel>
        <TextField
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
        <FormControl fullWidth error={!!errors.gender}>
          <InputLabel>Gender</InputLabel>
          <Select name="gender" value={formData.gender} onChange={handleChange}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>
       <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        <FormControl fullWidth error={!!errors.grade}>
          <InputLabel>Gender</InputLabel>
          <Select name="gender" value={formData.grade} onChange={handleChange}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>ID / Passport</InputLabel>
        <TextField
          fullWidth
          name="idOrPassport"
          value={formData.idOrPassport}
          onChange={handleChange}
          error={!!errors.idOrPassport}
          helperText={errors.idOrPassport}
        />
      </Grid>
    </Grid>
  );
};

export default StudentDetails;
