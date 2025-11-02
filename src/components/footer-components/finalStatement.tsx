import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import GlowingButton from '../glowingButton'
import GlowingButtonOutlined from '../glowingButtonOutlined'

const FinalStatement = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: "100%",
                my: "0.3rem"
            }}
            gap={2}
        >
            <Box
                sx={{
                    display: "flex", width: "100%", flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "left" }, justifyContent: "center"
                }}
                gap={3}
            >
                <Box
                    sx={{
                        display: "flex",
                        //  width: "100%",
                        alignItems: { xs: "center", md: "left" },
                        justifyContent: { xs: "center", md: "left" }
                    }}
                >
                    <Image
                        alt="Responsive"
                        src="/logo2.jpg"
                        width={100}
                        height={100}
                        style={{
                            borderRadius: "50px"
                        }}

                    />
                </Box >

                <Stack gap={1}
                    sx={{
                        display: "flex", width: "100%",
                        alignItems: { xs: "center", md: "left" },
                        justifyContent: { xs: "center", md: "left" }
                    }}>
                    <Typography variant='h6'
                        sx={{
                            width: "100%",
                            background: "linear-gradient(90deg, #00c3ffff, #dcc1cb7c)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            lineHeight: 1,
                            backgroundClip: "text",
                            color: "transparent",
                            textAlign: { xs: "center", md: "left" }
                        }}
                    >
                        Smart Me Academy
                    </Typography>
                    <Typography variant='body2' color='text.secondary' sx={{ textAlign: { xs: "center", md: "left" } }} >
                        &ldquo; Smart Me Academy empowers students with quality
                        education and skills for a brighter future, fostering growth,
                        creativity and excellence &rdquo;
                    </Typography>
                </Stack>
            </Box>
        </Box>
    )
}

export default FinalStatement