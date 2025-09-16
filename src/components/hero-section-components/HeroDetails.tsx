"use client"
import { slideIn } from '@/utils/motion'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import GlowingButton from '../glowingButton'
import GlowingButtonOutlined from '../glowingButtonOutlined'
import ArrowDown from '@mui/icons-material/ArrowDownward'
import Image from 'next/image'
// import { styles } from '@/styles/styles'

const HeroDetails = () => {
    // const name = "Smart Me Academy";
    const motto = " Smart Me Bright Me Bright Future\nNever Stop Learning";

    return (
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Box gap={{ xs: 4, sm: 1, xl: 2 }}
                    sx={{
                        // ...styles.center_flex,
                        width: "100%",
                        height: "100%",
                        display:"flex",
                        flexDirection: "column",
                        marginTop: { xs: "0vh", sm: "20vh", xl: "10vh" }
                    }}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" }, alignItems: "center" }} gap={1}>
                        <Stack>
                            <Typography
                                variant="h2"
                                sx={{
                                    textTransform: "capitalize",
                                    fontSize: { xs: "64px", sm: "64px", xl: "100px" },
                                    letterSpacing: "2px",
                                    fontWeight: (theme) => theme.typography.fontWeightBold,
                                    display: "flex",
                                    justifySelf: "center",
                                    color: (theme) => theme.palette.secondary.main,
                                    lineHeight: {
                                        xs: "24px", sm: "30px", xl: "30px"
                                    }
                                }}>



                                smart me
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    textTransform: "capitalize",
                                    fontSize: { xs: "64px", sm: "64px", xl: "102px" },
                                    letterSpacing: "2px",
                                    fontWeight: (theme) => theme.typography.fontWeightBold,
                                    display: "flex",
                                    justifySelf: "center",
                                    color: "textPrimary",
                                }}
                            >
                                academy
                            </Typography>
                        </Stack>

                    </Box>
                    <Stack
                        gap={{ xs: 4, sm: 2, xl: 4 }}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ width: { xs: "100%", sm: "60%", xl: "60%" } }}>
                            <Typography
                                variant='h1'
                                textAlign={{ xs: "center", sm: "left" }}
                                fontWeight="light"
                                sx={{ fontSize: { xs: "14px", sm: "32px", xl: "28px" } }}>
                                {motto}
                            </Typography>
                        </Box>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}
                            sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <GlowingButtonOutlined
                                variant="outlined"
                                type="button"
                                // size={{xs:"large"}}
                                sx={{ width: { xs: "50%", sm: "100px", xl: "20%" } }}
                            >
                                Contact Us
                            </GlowingButtonOutlined>
                            <GlowingButton
                                variant="outlined"
                                type="button"
                                href='/enroll-with-us'
                                // size="large"
                                sx={{ width: { xs: "50%", sm: "100px", xl: "20%", fontWeight: "bold" } }}
                            >
                                Enroll now
                            </GlowingButton>
                            <ArrowDown />
                        </Stack>
                    </Stack>

                </Box>
                <Box
                    sx={{
                        display: "flex",
                        // position: { xs: "relative", xl: "absolute" },
                        alignItems: "center",
                        cursor: "pointer",
                        bottom: "5vh",

                    }}
                >
                    <Image
                        src="/logo1.jpg"
                        alt="logo"
                        width={320}
                        height={320}
                        style={{
                            borderRadius: "50%",
                            opacity: 0.2,
                            height: "100%",
                            width: "100%",
                            objectFit: "cover"
                        }}
                        sizes="(max-width: 600px) 160px, 320px"
                        priority
                    />

                </Box>
            </Box>

        </motion.div >
    )
}

export default HeroDetails
