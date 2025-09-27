"use client";

import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    IconButton,
    Stack,
    Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "@/styles/styles";
import GlowingIconButton from "./GlowingIconButton";
import Image from "next/image";
import GlowingButtonOutlined from "./glowingButtonOutlined";
import GlowingButton from "./glowingButton";

export default function PromoPopup() {
    const [open, setOpen] = useState(false);

    // Open on first page load
    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 500); // delay a little for nicer effect
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
            sx={{
                width: "100vw",
                "& .MuiDialog-paper": {
                    ...styles.glassOutlinedDark,
                    p: 1,
                    // height: "100% "
                },
            }}
        >
            <Box height={"100%"}>
                <Box sx={{
                    display: "flex",
                    width: "100%",

                    position: "relative",
                    alignItems: "right"
                }}>
                    <GlowingIconButton
                        aria-label="close"
                        onClick={handleClose}
                        size="small"
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </GlowingIconButton>
                </Box>
                <Stack mt={"1.25rem"} sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.25rem" }}>
                    {/* <DialogTitle
                        sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.25rem" }}
                    > */}
                    <Typography variant="h6" color="textPrimary">
                        Welcome to Our School!
                    </Typography>
                    <Typography variant="h2" color="secondary" fontWeight="bold">
                        Smart Me Academy
                    </Typography>
                    {/* </DialogTitle> */}
                    {/* <DialogContent hidden> */}
                    <Box position={"relative"}>
                        <Box
                            sx={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                // alignItems: { xs: "center", md: "left" },
                                // justifyContent: { xs: "center", md: "left" },
                                position: "absolute",
                                // top: "10vh"
                            }}
                        >
                            <Image
                                alt="Responsive"
                                src="/logo2.jpg"
                                width={200}
                                height={200}
                                style={{
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    opacity: "0.1",
                                    zIndex: -1
                                }}

                            />
                        </Box >
                    </Box>


                    <Typography variant="body1" align="center" sx={{ mt: 1 }}>
                        Enroll now for the new academic year and secure your child’s place.
                        Limited spaces available — apply today!
                        New Registration R500
                    </Typography>
                    {/* </DialogContent> */}
                </Stack>
                <DialogActions sx={{ justifyContent: "center", my: 2 }}>
                    <GlowingButton size="small" onClick={handleClose} color="primary" variant="contained" href="/enroll-with-us">
                        Enroll Now
                    </GlowingButton>
                    <GlowingButtonOutlined size="small" onClick={handleClose} variant="outlined" href="/enroll-with-us">
                        Re Enroll
                    </GlowingButtonOutlined>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
