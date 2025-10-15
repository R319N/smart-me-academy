"use client"
import { slideIn } from '@/utils/motion'
import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import GlowingButton from '../glowingButton'
import GlowingButtonOutlined from '../glowingButtonOutlined'
import Image from 'next/image'
import { styles } from '@/styles/styles'
import ScrollIndicator from '../ScrollIndicator'
import PoppinsFontWrapper from "@/layouts/wrappers/PoppinsWrapper";


const HeroDetails = () => {
    const motto = " Smart Me Bright Me Bright Future\nNever Stop Learning";

    return (
        <Grid container
            sx={{
                position: "relative",
                height: "100%",
                width: "100%"

            }}>
            <Grid size={{ xs: 12, md: 6 }}
                sx={{
                    display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "left" },
                    height: "100%",

                }}
            >
                <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
                    <Stack gap={7}>
                        <Stack gap={2} sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            alignItems: { xs: "center", sm: "baseline" },
                            justifyContent: { xs: "center", sm: "left" }

                        }} >
                            <Box>
                                <PoppinsFontWrapper>
                                    <Typography
                                        // className={poppins.className}
                                        color='secondary'
                                        sx={{
                                            // ...poppins.style,
                                            fontSize: { xs: "64px", sm: "100px", xl: "104px" },
                                            letterSpacing: "2px",
                                            textTransform: "capitalize",
                                            fontWeight: (theme) => theme.typography.fontWeightBold,
                                            lineHeight: 1,
                                            backgroundClip: "text",
                                            color: "transparent",
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
                                                WebkitTextStroke: "1px #97f0db73",

                                            }}

                                        >Me</span>
                                    </Typography>
                                    <Typography
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
            <Grid size={{ xs: 12, md: 6 }}
                sx={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center", justifyContent: { xs: "center", md: "right" },
                }}>
                <Box
                    sx={{
                        display: "none",
                        position: "relative",
                        cursor: "pointer",
                    }}
                >   <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
                        <Image
                            src="/logo1.jpg"
                            alt="logo"
                            width={320}
                            height={320}
                            style={{
                                borderRadius: "50%",
                                opacity: 0.1,
                                height: "100%",
                                width: "100%",
                                objectFit: "cover"
                            }}
                            sizes="(max-width: 600px) 200px, 320px"
                            priority
                        />
                    </motion.div >
                </Box>
            </Grid>
        </Grid >
    )
}
export default HeroDetails
