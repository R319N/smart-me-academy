import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, SelectChangeEvent, FormHelperText } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { EnrollmentFormData } from "../../../types";
import DatePickerInput from "../UI/DatePicker";
import { on } from "events";

interface Props {
  formData: EnrollmentFormData;
  setFormData: Dispatch<SetStateAction<EnrollmentFormData>>;
  errors: Record<string, string>;
  onFieldChange: (name: string, value: any) => void;
}


const grades = Array.from({ length: 12 }, (_, i) => i + 1)

const StudentDetails: React.FC<Props> = ({ formData, setFormData, errors, onFieldChange }) => {
  const [showGenderPH, setShowGenderPH] = React.useState(false);
  const [showGradePH, setShowGradePH] = React.useState(false);
  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  // ): void => {
  //   const target = e.target as HTMLInputElement;
  //   if (!target || !target.name) return;
  //   setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  // };

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          variant="standard"
          fullWidth
          label="first name"
          name="firstName"
          placeholder="Student's First Name"
          value={formData.firstName}
          onChange={(e) => onFieldChange("firstName", e.target.value)}
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} >
        <TextField
          variant="standard"
          fullWidth
          name="surname"
          label="last name"
          placeholder="Student's Last Name"
          value={formData.surname}
          onChange={(e) => onFieldChange("surname", e.target.value)}
          error={!!errors.surname}
          helperText={errors.surname}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <DatePickerInput
          label="date of birth"
          value={formData.dob}
          onChange={(value) => {
            Promise.resolve(onFieldChange("dob", value))
              .then(() => {
                setFormData(prev => ({ ...prev, dob: value }));
              })
              .catch(error => {
                // handle error
              });
          }}
          error={errors.dob}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          variant="standard"
          fullWidth
          name="idOrPassport"
          label="ID or passport number"
          placeholder="ID or Passport Number"
          value={formData.idOrPassport}
          onChange={(e) => onFieldChange("idOrPassport", e.target.value)}
          error={!!errors.idOrPassport}
          helperText={errors.idOrPassport}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} >
        <FormControl fullWidth variant="standard" error={!!errors.gender}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            name="gender"
            label="Gender"
            labelId="gender-label"
            value={formData.gender}
            onChange={(e) => onFieldChange("gender", e.target.value)}
            variant="standard"
            onOpen={() => setShowGenderPH(true)}
            onClose={() => setShowGenderPH(false)}
            error={!!errors.gender}
            // helperText={errors.idOrPassport}
            renderValue={(selected) => {
              // Show placeholder ONLY when the menu is open
              if (selected === "" && showGenderPH) {
                return <em>Select gender</em>;
              }

              // Closed + empty → Show empty string so label floats
              if (selected === "") {
                return "";
              }
              return selected;
            }}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
          <FormHelperText>{!!errors ? errors.gender : formData.gender}</FormHelperText>
        </FormControl>
      </Grid >

      <Grid size={{ xs: 12, md: 6 }}>
        <FormControl fullWidth variant="standard" error={!!errors.grade}>
          <InputLabel id="grade-label">Grade</InputLabel>

          <Select
            labelId="grade-label"
            name="grade"
            label="grade"
            value={formData.grade}
            onChange={(e) => onFieldChange("grade", e.target.value)}
            displayEmpty
            onOpen={() => setShowGradePH(true)}
            onClose={() => setShowGradePH(false)}
            renderValue={(selected) => {
              // Show placeholder ONLY when the menu is open
              if (selected === "" && showGradePH) {
                return <em>Select your grade</em>;
              }

              // Closed + empty → Show empty string so label floats
              if (selected === "") {
                return "";
              }

              // Otherwise show selected value
              return selected;
            }}
          >
            <MenuItem value="R">R</MenuItem>
            {grades.map((num) => (
              <MenuItem key={num} value={String(num)}>
                {num}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{!!errors ? errors.grade : formData.grade}</FormHelperText>
        </FormControl>
      </Grid>
    </Grid >
  );
};

export default StudentDetails;
