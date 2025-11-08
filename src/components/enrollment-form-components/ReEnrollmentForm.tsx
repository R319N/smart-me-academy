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
import ConsentAndSubmit from "./ConsentAndSubmit";
import { ReEnrollmentFormHeading } from "./EnrollmentFormHeading";
import BpCheckbox from "../CustomizedComponents/GeneCheckbox";
import { EnrollmentFormData } from "../../../types";
import CustomizedSteppers from "./CustomizedSteppers";
import { styles } from "@/styles/styles";
import GlowingButton from "../glowingButton";
import NextIcon from "@mui/icons-material/ArrowForwardIosSharp";
import GlowingButtonOutlined from "../glowingButtonOutlined";
import SuccessScreen from "./SuccessScreen";

interface Props {
    formSteps: { title: string; detail: string }[];
}

const ReEnrollmentForm: React.FC<Props> = ({ formSteps }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const [showSuccess, setShowSuccess] = useState(false);

    const [formData, setFormData] = useState<EnrollmentFormData>({
        enrolmentType: "reenrolment",
        firstName: "",
        surname: "",
        gender: "",
        dob: "",
        grade: "",
        idOrPassport: "",
        custodianFullName: "",
        email: "",
        contactNumber: "",
        whatsappNumber: "",
        relationshipToStudent: "",
        maritalStatus: "",
        address: "",
        idImage: null,
        proofOfResidence: null,
        birthCertificate: null,
        latestCardReport: null,
        monthlyTuition: "",
        paymentDay: "",
        year: "",
        extraLessons: "",
        agreeTerms: false,
        agreePayment: false,
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
        e?.preventDefault();
        if (!validateStep()) return;

        try {
            const payload = {
                ...formData,
                enrolmentType: "re-enrollment",
            };

            const res = await fetch("/api/students", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (data.success) {
                setShowSuccess(true);  // ✅ Show success screen
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
            handleSubmit();
            setOpenModal(false);
        }
    };



    // ✅ If success, show success screen instead of form
    if (showSuccess) return <SuccessScreen />;

    return (
        <form onSubmit={handleSubmit}>
            <ReEnrollmentFormHeading />
            <Grid container sx={styles.center_flex} spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <CustomizedSteppers activeStep={activeStep} formSteps={formSteps} />
                </Grid>
                <Grid container spacing={2} size={{ xs: 12, sm: 8 }} sx={{ ...styles.glassOutlined, p: "2rem" }}>
                    {activeStep === 0 && (
                        <StudentDetails formData={formData} setFormData={setFormData} errors={errors} />
                    )}
                    {activeStep === 1 && (
                        <CustodianDetails formData={formData} setFormData={setFormData} errors={errors} />
                    )}
                    {activeStep === 2 && (
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

                {activeStep < formSteps.length - 1 ? (
                    <GlowingButton endIcon={<NextIcon />} variant="contained" onClick={handleNext}>
                        Next
                    </GlowingButton>
                ) : (
                    <GlowingButton variant="contained" onClick={() => setOpenModal(true)}>
                        Submit
                    </GlowingButton>
                )}
            </Box>

            {/* Registration Fee Agreement Modal */}
            <Dialog open={openModal} onClose={() => setOpenModal(false)}
                sx={{
                    "& .MuiDialog-paper": {
                        ...styles.glassOutlinedDark,
                    }
                }}
            >
                <DialogTitle color="text.secondary">Registration Fee Agreement</DialogTitle>
                <DialogContent>
                    <Typography color="text.secondary">
                        By submitting, you agree to pay a non-refundable registration fee of <strong>R500</strong>.
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
                        <span style={{ marginLeft: 8, color: "#E6e4ce" }}>I agree to the school payment policy.</span>
                    </div>
                </DialogContent>
                <DialogActions>
                    <GlowingButtonOutlined onClick={() => setOpenModal(false)}>Cancel</GlowingButtonOutlined>
                    <GlowingButton
                        variant="contained"
                        onClick={handleFinalSubmit}
                        disabled={!formData.registrationFeeAgreed}
                    >
                        Confirm & Submit
                    </GlowingButton>
                </DialogActions>
            </Dialog>
        </form>
    );
};

export default ReEnrollmentForm;
