"use client"
import { slideIn } from '@/utils/motion'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import GlowingButton from '../glowingButton'
import GlowingButtonOutlined from '../glowingButtonOutlined'
import Image from 'next/image'
import { styles } from '@/styles/styles'

const HeroDetails = () => {
    const motto = " Smart Me Bright Me Bright Future\nNever Stop Learning";

    return (

        <Box sx={{
            position: "relative",
            display: "flex",
            flexDirection: { xs: "column", sm: "row-reverse" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            height: "100%",
            width: "100%",
            zIndex: 10,
            // p: "3rem"

        }}>

            <Box
                sx={{
                    position: { xs: "absolute", md: "relative" },
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    justifyContent: "center",
                    // height: { xs: "30vh", sm: "50vh" },
                    // width: { xs: "30vh", sm: "50vh" },

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
                        sizes="(max-width: 600px) 160px, 320px"
                        priority
                    />
                </motion.div >
            </Box>

            <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        // justifyContent: "center",
                        flexDirection: "column",
                        // alignItems: "center"
                    }}
                >

                    <Stack gap={3} >
                        <Box gap={1} sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "center", sm: "baseline" },
                            justifyContent: { xs: "center", sm: "left" }

                        }} >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: "64px", sm: "64px", xl: "100px" },
                                    letterSpacing: "2px",
                                    textTransform: "capitalize",
                                    fontWeight: (theme) => theme.typography.fontWeightBold,
                                    // lineHeight: { xs: "1.8rem", sm: "30px", xl: "30px" },

                                    // Gradient background clipped into the text
                                    background: "linear-gradient(90deg, #ff88003a, #e52e7154)",
                                    //  background: "inherit",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",

                                    backgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                smart me
                            </Typography>
                            <Box sx={{ height: { xs: "5rem", md: "7rem" }, }}>

                                <Typography
                                    variant="h2"
                                    sx={{
                                        textTransform: "capitalize",
                                        fontSize: { xs: "64px", sm: "64px", xl: "102px" },
                                        letterSpacing: "2px",
                                        fontWeight: (theme) => theme.typography.fontWeightBold,
                                        height: "100%",
                                        lineHeight: 0.6,
                                        // display: "flex",
                                        // justifySelf: "center",
                                        color: "textPrimary",
                                    }}
                                >
                                    academy
                                </Typography>
                            </Box>
                            <Typography
                                variant='h1'
                                textAlign="left"
                                fontWeight="light"
                                sx={{ fontSize: { xs: "14px", sm: "32px", xl: "18px" } }}>
                                {motto}
                            </Typography>
                        </Box>

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
                                size="large"
                                fullWidth
                                sx={{ width: { xs: "70%", sm: "100px", xl: "16vw" } }}                         // sx={{ width: { xs: "50%", md: "100%" } }}
                            >
                                Re Enroll
                            </GlowingButtonOutlined>
                            <GlowingButton
                                variant="contained"
                                type="button"
                                href='/enroll-with-us'
                                size="large"
                                fullWidth
                                sx={{ width: { xs: "70%", sm: "100px", xl: "150px" } }}
                            >
                                Enroll Now
                            </GlowingButton>
                        </Stack>
                    </Stack>
                </Box>
            </motion.div>

        </Box>
    )
}

export default HeroDetails
