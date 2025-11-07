"use client";

import { planetVariants, slideIn } from "@/utils/motion";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExoFontWrapper } from "@/layouts/wrappers/PoppinsWrapper";
import GlowingButtonOutlined from "../glowingButtonOutlined";
import GlowingButton from "../glowingButton";

const HeroDetails = () => {
    return (
        <Grid
            container
            sx={{
                position: "relative",
                height: "100vh",
                width: "100%",
                zIndex: 10, // this must be higher than HeroBackground zIndex
            }}
        >
            {/* LEFT COLUMN (TEXT) */}
            <Grid
                size={{ xs: 12, xl: 6 }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", xl: "flex-start" },
                    height: "100%",
                }}
            >
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    style={{ zIndex: 10, position: "relative" }}
                >
                    <Stack gap={10} sx={{ height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                        <Stack
                            gap={2}
                            sx={{
                                alignItems: { xs: "center", xl: "flex-start" },
                                textAlign: { xs: "center", xl: "left" },
                            }}
                        >
                            <Box sx={{ width: "100%" }}>
                                <ExoFontWrapper>
                                    <Typography
                                        color="white"
                                        sx={{
                                            fontSize: { xs: "32px", sm: "36px", xl: "42px" },
                                            fontWeight: (theme) => theme.typography.fontWeightBold,
                                            lineHeight: 1.1,
                                            textTransform: "capitalize",
                                            textWrap: "balance",
                                        }}
                                    >
                                        Smart Me. Bright Me.<br />
                                        Bright Future.
                                    </Typography>
                                </ExoFontWrapper>

                                <Typography
                                    variant="body1"
                                    color="rgba(255,255,255,0.8)"
                                    sx={{ mt: 2 }}
                                >
                                    Inspiring young minds to think smart, dream big, and build a
                                    bright future — one lesson at a time.
                                </Typography>
                            </Box>
                        </Stack>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Stack spacing="5"
                                sx={{
                                    height: "100%",
                                    display: "flex", flexDirection: "column", justifyContent: "space-between"
                                }}>

                                <Stack direction={{ xs: "column", xl: "row" }} spacing={2}
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: { xs: "center", sm: "left" }
                                    }}
                                >

                                    <GlowingButton
                                        variant="contained"
                                        color='primary'
                                        type="button"
                                        href="/enroll-with-us?type=enrollment"
                                        size="medium"
                                        fullWidth
                                        sx={{ width: { xs: "50%", sm: "150px", xl: "150px" } }}
                                    >
                                        Enroll
                                    </GlowingButton>
                                    <GlowingButtonOutlined
                                        variant="outlined"
                                        type="button"
                                        href="/enroll-with-us?type=reenrollment"
                                        size="medium"
                                        fullWidth
                                        sx={{ width: { xs: "50%", sm: "150px", xl: "150px" } }}                         // sx={{ width: { xs: "50%", md: "100%" } }}
                                    >
                                        Re Enroll
                                    </GlowingButtonOutlined>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </motion.div>
            </Grid>

            {/* RIGHT COLUMN (OPTIONAL LOGO) */}
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                    display: { xs: "none", xl: "flex" },
                    appearance: "none",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: "100%",
                }}
            >
                <motion.div variants={planetVariants("right")}>
                    <Box sx={{ position: "relative", width: 200, height: 200 }}>
                        <Image
                            src="/logo1.jpg"
                            alt="School Logo"
                            fill
                            style={{
                                borderRadius: "50%",
                                opacity: 0.8,
                                objectFit: "cover",
                            }}
                            priority
                        />
                    </Box>
                </motion.div>
            </Grid>
        </Grid>
    );
};

export default HeroDetails;


{/* <Typography
                                        // className={poppins.className}
                                        // color='secondary'
                                        sx={{
                                            // ...poppins.style,
                                            fontSize: { xs: "64px", sm: "100px", xl: "104px" },
                                            letterSpacing: "2px",
                                            textTransform: "capitalize",
                                            fontWeight: (theme) => theme.typography.fontWeightBold,
                                            lineHeight: 1,
                                            backgroundClip: "text",
                                            color: "textPrimary",
                                            textWrap: "nowrap",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        <span>smart</span>
                                        &nbsp;
                                        <span
                                            style={{
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                WebkitTextStroke: "1px #010B13",

                                            }}

                                        >Me</span>
                                    </Typography> */}
{/* <Typography
                                        variant="h6"
                                        //  className={poppins.className}
                                        sx={{
                                            // ...poppins.style,
                                            textTransform: "capitalize",
                                            fontSize: { xs: "64px", sm: "102px", xl: "84px" },
                                            letterSpacing: "2px",
                                            fontWeight: (theme) => theme.typography.fontWeightBold,
                                            height: "100%",
                                            lineHeight: 1,
                                            // display: "flex",
                                            // justifySelf: "center",
                                            color: "textPrimary",
                                        }}
                                    >
                                        academy
                                    </Typography>
                                </PoppinsFontWrapper>
                            </Box>
                            <Box sx={{ width: "80%" }}>
                                <Typography
                                    variant='h6'
                                    textAlign={{ xs: "center", md: "left" }}
                                    fontWeight="regular"
                                    sx={{
                                        fontSize: { xs: "14px", sm: "32px", lg: "16px" }, lineHeight: 1,
                                        color: (theme) => theme.palette.text.secondary
                                    }}>
                                    {motto}
                                </Typography>

                            </Box>
                        </Stack>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Stack spacing="5"
                                sx={{
                                    height: "100%",
                                    display: "flex", flexDirection: "column", justifyContent: "space-between"
                                }}>

                                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: { xs: "center", sm: "left" }
                                    }}
                                >
                                    <GlowingButtonOutlined
                                        variant="outlined"
                                        type="button"
                                        href='/enroll-with-us'
                                        size="medium"
                                        fullWidth
                                        sx={{ width: { xs: "50%", sm: "100px", xl: "16vw" } }}                         // sx={{ width: { xs: "50%", md: "100%" } }}
                                    >
                                        Re Enroll
                                    </GlowingButtonOutlined>
                                    <GlowingButton
                                        variant="contained"
                                        color='primary'
                                        type="button"
                                        href='/enroll-with-us'
                                        size="medium"
                                        fullWidth
                                        sx={{ width: { xs: "50%", sm: "100px", xl: "150px" } }}
                                    >
                                        Enroll Now
                                    </GlowingButton>
                                </Stack>
                            </Stack>
                        </Box>
                        <ScrollIndicator />
                    </Stack>

                </motion.div>
            </Grid>
            */}
