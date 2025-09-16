import { Grid, Typography } from "@mui/material";
import BpCheckbox from "../CustomizedComponents/GeneCheckbox";
import React from "react";

interface Props {
  formData: {
    monthlyTuition: string;
    paymentDay: string;
    year: string;
    extraLessons: string;
    agreeTerms: boolean;
    agreePayment: boolean;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  errors: { [key: string]: string };
}

const ConsentAndSubmit: React.FC<Props> = ({
  formData,
  setFormData,
  errors,
}) => {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): void {
    const { name, value } = event.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <Grid container spacing={2}>
      {/* Grade */}
      <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        <label style={{ display: "block", marginBottom: 8, fontWeight: 500 }}>
          Select School Grade
        </label>
        <select
          name="grade"
          value={formData.monthlyTuition}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: 4,
            border: errors.monthlyTuition ? "1px solid red" : "1px solid #ccc",
            fontSize: "1rem",
          }}
        >
          <option value="" disabled>
            Choose grade...
          </option>
          <option value="full-day-grade-r">Full Day Grade (R700)</option>
          <option value="grade-1">Grade 1 - 7 (550)</option>
          <option value="high-school">High School(700)</option>
        </select>
        {errors.monthlyTuition && (
          <Typography variant="body2" color="error">
            {errors.monthlyTuition}
          </Typography>
        )}
      </Grid>

      {/* Payment Day */}
      <Grid size={{ xs: 12, md: 6 }} sx={{ py: "1rem" }}>
        <label style={{ display: "block", marginBottom: 8, fontWeight: 500 }}>
          Day of Month to Pay School Fees
        </label>
        <input
          type="number"
          name="paymentDay"
          min={1}
          max={31}
          value={formData.paymentDay}
          onChange={handleChange}
          placeholder="Enter day (1-31)"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: 4,
            border: errors.paymentDay ? "1px solid red" : "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
        {errors.paymentDay && (
          <Typography variant="body2" color="error">
            {errors.paymentDay}
          </Typography>
        )}
      </Grid>

      {/* Year */}
      <Grid size={{ xs: 12, md: 6 }}>
        <label style={{ display: "block", marginBottom: 8, fontWeight: 500 }}>
          Year Applying For
        </label>
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: 4,
            border: errors.year ? "1px solid red" : "1px solid #ccc",
            fontSize: "1rem",
          }}
        >
          <option value="" disabled>
            Choose year...
          </option>
          {Array.from({ length: 3 }).map((_, i) => {
            const year = new Date().getFullYear() + i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
        {errors.year && (
          <Typography variant="body2" color="error">
            {errors.year}
          </Typography>
        )}
      </Grid>

      {/* Extra Lessons */}
      <Grid size={{ xs: 12, md: 6 }}>
        <label style={{ display: "block", marginBottom: 8, fontWeight: 500 }}>
          Would you like extra lessons for R200?
        </label>
        <select
          name="extraLessons"
          value={formData.extraLessons}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: 4,
            border: errors.extraLessons ? "1px solid red" : "1px solid #ccc",
            fontSize: "1rem",
          }}
        >
          <option value="" disabled>
            Select option...
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.extraLessons && (
          <Typography variant="body2" color="error">
            {errors.extraLessons}
          </Typography>
        )}
      </Grid>

      {/* Terms and Conditions */}
      <Grid size={{ xs: 12, md: 6 }}>
        <div style={{ marginTop: "1rem" }}>
          <BpCheckbox
            checked={formData.agreeTerms}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData((prev: any) => ({
                ...prev,
                agreeTerms: e.target.checked,
              }))
            }
          />
          <span style={{ marginLeft: 8 }}>
            I agree with the{" "}
            <a
              href="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1976d2", textDecoration: "underline" }}
            >
              terms and conditions
            </a>
            .
          </span>
        </div>
        {errors.agreeTerms && (
          <Typography variant="body2" color="error">
            {errors.agreeTerms}
          </Typography>
        )}
      </Grid>

      {/* Payment Policy */}
      <Grid size={{ xs: 12, md: 6 }}>
        <div style={{ marginTop: "1rem" }}>
          <BpCheckbox
            checked={formData.agreePayment}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData((prev: any) => ({
                ...prev,
                agreePayment: e.target.checked,
              }))
            }
          />
          <span style={{ marginLeft: 8 }}>
            I agree with the{" "}
            <a
              href="/payment-policy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1976d2", textDecoration: "underline" }}
            >
              payment policy
            </a>
            .
          </span>
        </div>
        {errors.agreePayment && (
          <Typography variant="body2" color="error">
            {errors.agreePayment}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default ConsentAndSubmit;
