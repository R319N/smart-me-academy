import { Grid, Typography, Button } from "@mui/material";
import React, { useRef } from "react";
import { EnrollmentFormData } from "../../../types";

interface DocumentInputProps {
  label: string;
  name: string;
  file?: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const DocumentInput: React.FC<DocumentInputProps> = ({ label, name, file, onChange, error }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Grid size={{ xs: 12, md: 6 }} sx={{ py: 1 }}>
      <Typography variant="subtitle1">{label}</Typography>

      <input
        type="file"
        name={name}
        ref={inputRef}
        style={{ display: "none" }}
        onChange={onChange}
        accept="image/*,.pdf"
      />

      <Button variant="contained" onClick={() => inputRef.current?.click()}>
        Upload {label}
      </Button>

      {file && <Typography variant="body2" color="green">{file.name}</Typography>}
      {error && <Typography variant="body2" color="error">{error}</Typography>}
    </Grid>
  );
};

interface Props {
  formData: EnrollmentFormData;
  setFormData: React.Dispatch<React.SetStateAction<EnrollmentFormData>>;
  errors: { [key: string]: string };
}

const DocumentsUpload: React.FC<Props> = ({ formData, setFormData, errors }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev: EnrollmentFormData) => ({ ...prev, [name]: files[0] }));
    }
  };

  return (
    <Grid container spacing={2}>
      <DocumentInput
        label="ID Image"
        name="idImage"
        file={formData.idImage}
        onChange={handleFileChange}
        error={errors.idImage}
      />
      <DocumentInput
        label="Proof of Residence"
        name="proofOfResidence"
        file={formData.proofOfResidence}
        onChange={handleFileChange}
        error={errors.proofOfResidence}
      />
      <DocumentInput
        label="Birth Certificate"
        name="birthCertificate"
        file={formData.birthCertificate}
        onChange={handleFileChange}
        error={errors.birthCertificate}
      />
      <DocumentInput
        label="Latest Card Report"
        name="latestCardReport"
        file={formData.latestCardReport}
        onChange={handleFileChange}
        error={errors.latestCardReport}
      />
    </Grid>
  );
};

export default DocumentsUpload;
