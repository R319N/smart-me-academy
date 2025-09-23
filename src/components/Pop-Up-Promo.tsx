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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
                "& .MuiDialog-paper": {
                    borderRadius: 3,
                    p: 1,
                },
            }}
        >
            {/* Close button top-right */}
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogTitle
                sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.25rem" }}
            >
                🎉 Welcome to Our School!
            </DialogTitle>

            <DialogContent>
                <Typography variant="body1" align="center" sx={{ mt: 1 }}>
                    Enroll now for the new academic year and secure your child’s place.
                    Limited spaces available — apply today!
                </Typography>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button onClick={handleClose} color="primary" variant="contained" href="/enroll-with-us">
                    Apply Now
                </Button>
            </DialogActions>
        </Dialog>
    );
}
