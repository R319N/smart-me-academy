import { Grid, InputLabel, TextField, FormControl, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import React from "react";
import { EnrollmentFormData } from "../../../types";

interface Props {
  formData: EnrollmentFormData;
  setFormData: React.Dispatch<React.SetStateAction<EnrollmentFormData>>;
  errors: Record<string, string>;
}

const CustodianDetails: React.FC<Props> = ({ formData, setFormData, errors }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    // Strictly type the target
    const target = e.target as HTMLInputElement & { name?: keyof EnrollmentFormData; value: string };
    if (!target.name) return;

    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>Full Name</InputLabel>
        <TextField
          fullWidth
          name="custodianFullName"
          value={formData.custodianFullName}
          onChange={handleChange}
          error={!!errors.custodianFullName}
          helperText={errors.custodianFullName}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>Email</InputLabel>
        <TextField
          fullWidth
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>Phone Number</InputLabel>
        <TextField
          fullWidth
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          error={!!errors.contactNumber}
          helperText={errors.contactNumber}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>Whatsapp Number</InputLabel>
        <TextField
          fullWidth
          name="whatsappNumber"
          value={formData.whatsappNumber}
          onChange={handleChange}
          error={!!errors.whatsappNumber}
          helperText={errors.whatsappNumber}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }} sx={{ py: "1rem" }}>
        <FormControl fullWidth error={!!errors.relationshipToStudent}>
          <InputLabel>Relationship to Student</InputLabel>
          <Select
            name="relationshipToStudent"
            value={formData.relationshipToStudent}
            onChange={handleChange}
          >
            <MenuItem value="Parent">Parent</MenuItem>
            <MenuItem value="Guardian">Guardian</MenuItem>
            <MenuItem value="Sibling">Sibling</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }} sx={{ py: "1rem" }}>
        <FormControl fullWidth error={!!errors.maritalStatus}>
          <InputLabel>Marital Status</InputLabel>
          <Select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
          >
            <MenuItem value="Single">Single</MenuItem>
            <MenuItem value="Married">Married</MenuItem>
            <MenuItem value="Divorced">Divorced</MenuItem>
            <MenuItem value="Widowed">Widowed</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }} sx={{ py: "1rem" }}>
        <InputLabel>Address</InputLabel>
        <TextField
          fullWidth
          multiline
          rows={3}
          name="address"
          value={formData.address}
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
        />
      </Grid>
    </Grid>
  );
};

export default CustodianDetails;
