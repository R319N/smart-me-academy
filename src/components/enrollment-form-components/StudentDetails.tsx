import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, SelectChangeEvent, FormHelperText, Box } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { EnrollmentFormData } from "../../../types";
import DatePickerInput from "../UI/DatePicker";
import { on } from "events";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { green } from "@mui/material/colors";

interface Props {
  formData: EnrollmentFormData;
  setFormData: Dispatch<SetStateAction<EnrollmentFormData>>;
  errors: Record<string, string>;
  onFieldChange: (name: string, value: unknown) => void;
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
          color={!errors.firstName && formData.firstName ? "success" : undefined}
          onChange={(e) => onFieldChange("firstName", e.target.value)}
          error={!!errors.firstName}
          helperText={errors.firstName}
          // sx={{
          //   "& .MuiInput-underline:before": {
          //     borderBottomColor: errors.firstName
          //       ? "red !important"
          //       : formData.firstName
          //         ? "green !important"
          //         : "rgba(255,255,255,0.5)",
          //   },
          //   "& .MuiInput-underline:after": {
          //     borderBottomColor: errors.firstName
          //       ? "red"
          //       : formData.firstName
          //         ? "green"
          //         : "#1976d2",
          //   },
          // }}

          slotProps={{
            input: {
              endAdornment:
                !errors.firstName && formData.firstName ? (
                  <CheckCircleIcon sx={{
                    fontSize: 20,
                    color: green[500],
                    // background:"yellow"
                  }} />
                ) : null,
            }
          }}
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
          slotProps={{
            input: {
              endAdornment:
                !errors.surname && formData.surname ? (
                  <CheckCircleIcon sx={{
                    fontSize: 20,
                    color: green[600],
                  }} />
                ) : null,
            }
          }}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ width: "100%", position: "relative" }}>
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
          {!errors.dob && formData.dob && (
            <CheckCircleIcon
              sx={{
                color: green[600],
                fontSize: 20,
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          )}
        </Box>
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
          slotProps={{
            input: {
              endAdornment:
                !errors.idOrPassport && formData.idOrPassport ? (
                  <CheckCircleIcon sx={{
                    fontSize: 20,
                    color: green[600],
                  }} />
                ) : null,
            }
          }}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} >
        <Box sx={{ position: "relative", width: "100%" }}>
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
          {!errors.gender && formData.gender && (
            <CheckCircleIcon
              sx={{
                color: green[600] ,
                fontSize: 20,
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          )}
        </Box>

      </Grid >

      <Grid size={{ xs: 12, md: 6 }}>
        <Box sx={{ position: "relative", width: "100%" }}>
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
          {!errors.grade && formData.grade && (
            <CheckCircleIcon
              sx={{
                color: green[800],
                fontSize: 20,
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          )}
        </Box>

      </Grid>
    </Grid >
  );
};

export default StudentDetails;
