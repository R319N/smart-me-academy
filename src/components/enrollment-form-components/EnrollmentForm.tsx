"use client";

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import StudentDetails from "./StudentDetails";
import CustodianDetails from "./CustodianDetails";
import DocumentsUpload from "./DocumentsUpload";
import ConsentAndSubmit from "./ConsentAndSubmit";
import EnrollmentFormHeading from "./EnrollmentFormHeading";
import BpCheckbox from "../CustomizedComponents/GeneCheckbox";
import { uploadToCloudinary } from "@/utils/cloudinaryUpload";
import { EnrollmentFormData } from "../../../types";
import CustomizedSteppers from "./CustomizedSteppers";
import { styles } from "@/styles/styles";
import GlowingButton from "../glowingButton";
import NextIcon from "@mui/icons-material/ArrowForwardIosSharp";
import GlowingButtonOutlined from "../glowingButtonOutlined";

const steps = ["Student Details", "Custodian Details", "Documents", "Consent & Submit"];

const EnrollmentForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        // Step 1
        firstName: "",
        surname: "",
        gender: "",
        dob: "",
        grade: "",
        idOrPassport: "",
        // Step 2
        custodianFullName: "",
        email: "",
        contactNumber: "",
        whatsappNumber: "",
        relationshipToStudent: "",
        maritalStatus: "",
        address: "",
        // Step 3
        idImage: null as File | null,
        proofOfResidence: null as File | null,
        birthCertificate: null as File | null,
        latestCardReport: null as File | null,
        // Step 4
        monthlyTuition: "",
        paymentDay: "",
        year: "",
        extraLessons: "",
        agreeTerms: false,
        agreePayment: false,
        //Step 5
        registrationFeeAgreed: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Step validation
    const validateStep = () => {
        const newErrors: { [key: string]: string } = {};

        if (activeStep === 0) {
            if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
            if (!formData.surname.trim()) newErrors.surname = "Surname is required";
            if (!formData.dob) newErrors.dob = "Date of birth is required";
            if (!formData.gender) newErrors.gender = "Gender is required";
            if (!formData.idOrPassport.trim()) newErrors.idOrPassport = "ID/Passport is required";
        }

        if (activeStep === 1) {
            if (!formData.custodianFullName.trim()) newErrors.custodianFullName = "Full name is required";
            if (!formData.email.trim()) newErrors.email = "Email is required";
            if (!formData.contactNumber.trim()) newErrors.contactNumber = "Phone number is required";
            if (!formData.whatsappNumber.trim()) newErrors.whatsappNumber = "WhatsApp number is required";
            if (!formData.relationshipToStudent) newErrors.relationshipToStudent = "Relationship is required";
            if (!formData.maritalStatus) newErrors.maritalStatus = "Marital status is required";
            if (!formData.address.trim()) newErrors.address = "Address is required";
        }

        if (activeStep === 2) {
            if (!formData.idImage) newErrors.idImage = "ID Image is required";
            if (!formData.proofOfResidence) newErrors.proofOfResidence = "Proof of Residence is required";
            if (!formData.birthCertificate) newErrors.birthCertificate = "Birth Certificate is required";
            if (!formData.latestCardReport) newErrors.latestCardReport = "Latest Card Report is required";
        }

        if (activeStep === 3) {
            if (!formData.grade) newErrors.grade = "Grade is required";
            if (!formData.paymentDay) newErrors.paymentDay = "Payment day is required";
            if (!formData.year) newErrors.year = "Year is required";
            if (!formData.extraLessons) newErrors.extraLessons = "Please select an option";
            if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to terms";
            if (!formData.agreePayment) newErrors.agreePayment = "You must agree to payment policy";
        }


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => setActiveStep((prev) => prev - 1);

    // Submit to API
    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault(); // only if event exists
        if (!validateStep()) return;

        try {
            const payload: EnrollmentFormData = { ...formData };

            // Upload files...
            if (formData.idImage) {
                payload.idImage = await uploadToCloudinary(formData.idImage);
            }
            if (formData.proofOfResidence) {
                payload.proofOfResidence = await uploadToCloudinary(formData.proofOfResidence);
            }
            if (formData.birthCertificate) {
                payload.birthCertificate = await uploadToCloudinary(formData.birthCertificate);
            }
            if (formData.latestCardReport) {
                payload.latestCardReport = await uploadToCloudinary(formData.latestCardReport);
            }

            // Send to API
            const res = await fetch("/api/students", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (data.success) {
                alert("Student saved successfully!");
                console.log("Saved student:", data.student);
            } else {
                alert("Error: " + data.error);
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong!");
        }
    };

    const handleFinalSubmit = () => {
        if (formData.registrationFeeAgreed) {
            handleSubmit(); // ✅ no fake event needed
            setOpenModal(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <EnrollmentFormHeading />
            <Grid container sx={styles.center_flex} spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <CustomizedSteppers activeStep={activeStep} />
                </Grid>
                <Grid container spacing={2} size={{ xs: 12, sm: 8 }} sx={{ ...styles.glassOutlined, p:"2rem" }}>
                    {activeStep === 0 && (
                        <StudentDetails formData={formData} setFormData={setFormData} errors={errors} />
                    )}
                    {activeStep === 1 && (
                        <CustodianDetails formData={formData} setFormData={setFormData} errors={errors} />
                    )}
                    {activeStep === 2 && (
                        <DocumentsUpload formData={formData} setFormData={setFormData} errors={errors} />
                    )}
                    {activeStep === 3 && (
                        <ConsentAndSubmit formData={formData} setFormData={setFormData} errors={errors} />
                    )}
                </Grid>
            </Grid>
            <Box width="100%" display="flex" justifyContent="right" sx={{ mt: 3 }}>
                {activeStep > 0 && (
                    <GlowingButtonOutlined variant="outlined" onClick={handleBack} sx={{ mr: 1 }}>
                        Back
                    </GlowingButtonOutlined>
                )}

                {activeStep < steps.length - 1 ? (
                    <GlowingButton endIcon={<NextIcon />} variant="contained" onClick={handleNext}>
                        Next
                    </GlowingButton>
                ) : (
                    <GlowingButton variant="contained" onClick={() => setOpenModal(true)}>
                        Submit
                    </GlowingButton>
                )}
            </Box>
            <Dialog open={openModal} onClose={() => setOpenModal(false)}>
                <DialogTitle>Registration Fee Agreement</DialogTitle>
                <DialogContent>
                    <Typography>
                        By submitting, you agree to pay a non-refundable registration fee of{" "}
                        <strong>R500</strong>.
                    </Typography>
                    <div style={{ marginTop: "1rem" }}>
                        <BpCheckbox
                            checked={formData.registrationFeeAgreed}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    registrationFeeAgreed: e.target.checked,
                                }))
                            }
                        />
                        <span style={{ marginLeft: 8 }}>I agree to pay the registration fee.</span>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenModal(false)}>Cancel</Button>
                    <Button
                        variant="contained"
                        onClick={handleFinalSubmit}
                        disabled={!formData.registrationFeeAgreed}
                    >
                        Confirm & Submit
                    </Button>
                </DialogActions>
            </Dialog>


        </form>
    );
};

export default EnrollmentForm;
