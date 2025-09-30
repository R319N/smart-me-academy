import React from 'react';
import { Box, Typography, TextField, Stack, Button, } from '@mui/material';
import Grid from '@mui/material/Grid'
import { styles } from '@/styles/styles';
import GlowingButton from '@/components/glowingButton';
import Image from 'next/image';
import GlowingButtonOutlined from '@/components/glowingButtonOutlined';

const EnrollSection: React.FC = () => {
    return (
        <Box sx={{
            ...styles.glassOutlinedDark,
            background: "#010203b0",
            position: "relative",
            // p: 4,
            width: "100%",
            minHeight: "225px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py:"1rem"
        }}>
            <Box height={"100%"} sx={{ ...styles.center_flex, flexDirection: "column" }}>
                <Stack sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.25rem" }}>
                    <Typography variant="h4" color="secondary" fontWeight="bold">
                        Smart Me Academy
                    </Typography>
                    <Box position={"relative"}>
                    </Box>
                    <Box sx={{ ...styles.center_flex, flexDirection: "column", width: "100%", p: "1rem" }}>
                        <Typography variant="body1" align="center" maxWidth={{ xs: "100%", md: "70%" }} sx={{ mt: 1 }} fontWeight={"regular"}>
                            Enroll now for the new academic year and secure your child’s place.
                            Limited spaces available — apply today!
                            New Registration R500
                        </Typography>
                        <Typography variant="h6" align="center" maxWidth={{ xs: "100%", md: "70%" }} sx={{ mt: 1 }} fontWeight={"regular"}>
                            New Registration is R500
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction={"row"} gap={2}>
                    <GlowingButton size="small" color="primary" variant="contained" href="/enroll-with-us">
                        Enroll Now
                    </GlowingButton>
                    <GlowingButtonOutlined size="small" variant="outlined" href="/enroll-with-us">
                        Re Enroll
                    </GlowingButtonOutlined>
                </Stack>
            </Box>
        </Box>
    )
}

export default EnrollSection;
