import { Grid, InputLabel, TextField, FormControl, Select, MenuItem, SelectChangeEvent, Stack, FormHelperText } from "@mui/material";
import React from "react";
import { EnrollmentFormData } from "../../../types";

interface Props {
  formData: EnrollmentFormData;
  setFormData: React.Dispatch<React.SetStateAction<EnrollmentFormData>>;
  errors: Record<string, string>;
onFieldChange: (name: string, value: any) => void
}

const CustodianDetails: React.FC<Props> = ({ formData, setFormData, errors, onFieldChange }) => {

  const [showCustodianPH, setShowCustodianPH] = React.useState(false);
  const [showMaritalPH, setShowMaritalPH] = React.useState(false);
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
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          variant="standard"
          fullWidth
          name="custodianFullName"
          label="Full Name"
          placeholder="Custodian/Parent Fullname"
          value={formData.custodianFullName}
          onChange={(e) => onFieldChange("custodianFullName", e.target.value)}
          error={!!errors.custodianFullName}
          helperText={errors.custodianFullName}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          variant="standard"
          fullWidth
          type="email"
          name="email"
          label="Email Address"
          placeholder="Enter Your Email Address"
          value={formData.email}
          onChange={(e) => onFieldChange("email", e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          variant="standard"
          label="Phone Number"
          placeholder="Enter Your Phone Number"
          fullWidth
          name="contactNumber"
          value={formData.contactNumber}
          onChange={(e) => onFieldChange("contactNumber", e.target.value)}
          error={!!errors.contactNumber}
          helperText={errors.contactNumber}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          variant="standard"
          label="WhatsApp Number"
          placeholder="Enter Your WhatsApp Number"
          fullWidth
          name="whatsappNumber"
          value={formData.whatsappNumber}
          onChange={(e) => onFieldChange("whatsappNumber", e.target.value)}
          error={!!errors.whatsappNumber}
          helperText={errors.whatsappNumber}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth  variant="standard" error={!!errors.relationshipToStudent}>
          <InputLabel id="gender-label">Relationship to Student</InputLabel>
          <Select          
            name="relationshipToStudent"
            value={formData.relationshipToStudent}
            onChange={(e) => onFieldChange("relationshipToStudent", e.target.value)}
            label="Relationship to Student"
            labelId="relationship-to-student-label"
            onOpen={() => setShowCustodianPH(true)}
            onClose={() => setShowCustodianPH(false)}
            renderValue={(selected) => {
              // Show placeholder ONLY when the menu is open
              if (selected === "" && showCustodianPH) {
                return <em>Relationship to Student</em>;
              }

              // Closed + empty → Show empty string so label floats
              if (selected === "") {
                return "";
              }
              return selected;
            }}
          >
            <MenuItem value="Parent">Parent</MenuItem>
            <MenuItem value="Guardian">Guardian</MenuItem>
            <MenuItem value="Sibling">Sibling</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          <FormHelperText>{!!errors ? errors.relationshipToStudent : ""}</FormHelperText>
        </FormControl>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <FormControl fullWidth error={!!errors.maritalStatus}>
          <InputLabel>Marital Status</InputLabel>
          <Select
            name="maritalStatus"
            value={formData.maritalStatus}
            variant="standard"
            onChange={(e) => onFieldChange("maritalStatus", e.target.value)}
            label="Relationship to Student"
            labelId="relationship-to-student-label"
            onOpen={() => setShowMaritalPH(true)}
            onClose={() => setShowMaritalPH(false)}
            renderValue={(selected) => {
              // Show placeholder ONLY when the menu is open
              if (selected === "" && showMaritalPH) {
                return <em>Marital Status</em>;
              }

              // Closed + empty → Show empty string so label floats
              if (selected === "") {
                return "";
              }
              return selected;
            }}
          >
            <MenuItem value="Single">Single</MenuItem>
            <MenuItem value="Married">Married</MenuItem>
            <MenuItem value="Divorced">Divorced</MenuItem>
            <MenuItem value="Widowed">Widowed</MenuItem>
          </Select>
          <FormHelperText>{!!errors ? errors.maritalStatus : ""}</FormHelperText>
        </FormControl>
      </Grid>

      <Grid size={12}>
        {/* <Stack gap={1}> */}
          <TextField
            variant="standard"
            label="Address"
            fullWidth
            placeholder="Enter Your Address"
            multiline
            rows={3}
            name="address"
            value={formData.address}
            onChange={(e) => onFieldChange("address", e.target.value)}
            error={!!errors.address}
            helperText={errors.address}
          />

      </Grid>
    </Grid>
  );
};

export default CustodianDetails;
