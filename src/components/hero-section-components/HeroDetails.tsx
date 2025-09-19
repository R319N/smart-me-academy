"use client"
import { slideIn } from '@/utils/motion'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import GlowingButton from '../glowingButton'
import GlowingButtonOutlined from '../glowingButtonOutlined'
import ArrowDown from '@mui/icons-material/ArrowDownward'
import Image from 'next/image'
import { styles } from '@/styles/styles'
// import { styles } from '@/styles/styles'

const HeroDetails = () => {
    // const name = "Smart Me Academy";
    const motto = " Smart Me Bright Me Bright Future\nNever Stop Learning";

    return (
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                // py: { xs: "24vh", md: "14vh" },
                zIndex:10

            }}>


                <Box
                gap={7}
                    sx={{
                        // ...styles.center_flex,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        //  my:"10vh"
                        // marginTop: { xs: "0vh", sm: "20vh", xl: "10vh" }
                    }}>
                    {/* sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" }, alignItems: "center" }}  */}
                    <Stack gap={1}>
                        <Stack gap={1} sx={styles.center_flex}>
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
                                        xs: "1.8rem", sm: "30px", xl: "30px"
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
                        <Box
                            sx={{ px: "3rem" }}
                        // sx={{ width: { xs: "80%", sm: "60%", xl: "60%" } }}z
                        >
                            <Typography
                                variant='h1'
                                textAlign="center"
                                fontWeight="light"
                                sx={{ fontSize: { xs: "14px", sm: "32px", xl: "18px" } }}>
                                {motto}
                            </Typography>
                        </Box>
                    </Stack>


                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}
                        sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <GlowingButtonOutlined
                            variant="outlined"
                            type="button"
                            size="large"
                            sx={{ width: { xs: "50%", sm: "100px", xl: "20%" } }}
                        >
                            Contact Us
                        </GlowingButtonOutlined>
                        <GlowingButton
                            variant="outlined"
                            type="button"
                            href='/enroll-with-us'
                            size="large"
                            sx={{ width: { xs: "50%", sm: "100px", xl: "20%", fontWeight: "bold" } }}
                        >
                            Enroll now
                        </GlowingButton>
                    </Stack>

                </Box>
                {/* <Box
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

                </Box> */}
            </Box>

        </motion.div >
    )
}

export default HeroDetails
