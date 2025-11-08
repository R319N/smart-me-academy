"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Box, Typography } from "@mui/material";
import GlowingButton from "../glowingButton";
import { motion } from "framer-motion";

const SuccessScreen = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setWindowSize({
            width: 300,
            height: window.innerHeight,
        });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ width: "100%", position: "relative" }}
        >
            {/* Confetti explosion */}
            <Confetti
                width={300}
                height={windowSize.height}
                numberOfPieces={220}
                gravity={0.25}
                recycle={false}
            />

            <Box
                sx={{
                    minHeight: "75vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    p: 4,
                }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                    style={{ fontSize: 70 }}
                >
                    ✅
                </motion.div>

                <Typography variant="h4" color="text.secondary" sx={{ mt: 2, mb: 2, fontWeight: 700 }}>
                    your form has been submitted!
                </Typography>

                <Typography sx={{ maxWidth: 480, mb: 4 }} color="text.secondary">
                    Your form has been successfully submitted.
                    Our admissions team will contact you soon.
                </Typography>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <GlowingButton
                        variant="contained"
                        onClick={() => (window.location.href = "/")}
                    >
                        Back to Home
                    </GlowingButton>
                </motion.div>
            </Box>
        </motion.div>
    );
};

export default SuccessScreen;
