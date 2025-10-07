"use client";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import Send from "@mui/icons-material/Send";
import Check from "@mui/icons-material/Check";

import { styles } from "@/styles/styles";
import GlowingButton from "../glowingButton";

import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_a06gldt", // Service ID
                "template_1vlkclz", // Template ID
                e.target,
                {
                    publicKey: "xFJhzQ3lJTLtNGmiN",
                }
            )
            .then(
                (result) => {
                    setSuccess(true);
                    setError(false); // Reset error state on success
                    console.log("SUCCESS!", result.text);
                },
                (error) => {
                    setError(true);
                    setSuccess(false); // Reset success state on error
                    console.log("FAILED...", error.text);
                }
            );
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 3000);
        // Clear form fields after submission
        e.target.reset();
    };

    return (
        <Box
            sx={{
                ...styles.center_flex,
                flexDirection: "column",
                p: "2rem 0rem",
                height: "100%",
                width:"100%"
            }}
        >
            {loading ? (
                <CircularProgress sx={{ color: "textPrimary" }} />
            ) : success ? (
                <Box sx={{ ...styles.column_flex }} gap={3}>
                    <Avatar>
                        <Check color="success" />
                    </Avatar>
                    <Typography variant="body1" textTransform="uppercase">
                        Message sent successfully!
                    </Typography>
                </Box>
            ) : (
                <form
                    onSubmit={sendEmail}
                    id="contact_form"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Box mb="1rem">
                        <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
                            fill in form
                        </Typography>
                        <Divider />
                    </Box>

                    <Box sx={{ py: "1rem" }}>
                        <InputLabel htmlFor="fullname">name</InputLabel>
                        <TextField
                            variant="standard"
                            // margin="normal"
                            name="from_name"
                            placeholder="fullname"
                            id="name"
                            required
                            fullWidth
                            sx={{ width: "300px" }}
                        />
                    </Box>
                    <Box sx={{ py: "1rem" }}>
                        <InputLabel htmlFor="fullname">company name</InputLabel>
                        <TextField
                            variant="standard"
                            type="text"
                            // margin="normal"
                            name="from_company"
                            placeholder="yourname/company name/ brand name ..."
                            id="company"
                            required
                            sx={{ width: "300px", pt: "1px" }}
                        />
                    </Box>
                    <Box sx={{ py: "1rem" }}>
                        <InputLabel htmlFor="email">email/phone</InputLabel>
                        <TextField
                            variant="standard"
                            type="text"
                            name="from_email"
                            id="email"
                            placeholder="email address or phone number"
                            required
                            sx={{ width: "300px" }}
                        />
                    </Box>
                    <Box sx={{ py: "1rem" }}>
                        <InputLabel htmlFor="message">message</InputLabel>
                        <TextField
                            variant="standard"
                            type="text"
                            name="message"
                            id="message"
                            placeholder="write your message here"
                            multiline
                            rows={3}
                            sx={{ width: "300px", pt: "0.5rem" }}
                            required
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex ",
                            // flexDirection: "column",
                            justifyContent: "right",
                            // alignItems: "right",
                        }}
                    // alignSelf="right"
                    >
                        <GlowingButton
                            variant="contained"

                            type="submit"
                            sx={{ m: "2vh", fontWeight: "lighter", width: "104px", align: "right" }}
                            endIcon={<Send />}
                        >
                            send
                        </GlowingButton>
                        {error && (
                            <Typography
                                variant="body2"
                                color="error"
                                sx={{ fontVariant: "all-small-caps" }}
                            >
                                Something went wrong. Please try again later.
                            </Typography>
                        )}
                    </Box>
                </form>
            )}
        </Box>
    );
};

export default ContactForm;
