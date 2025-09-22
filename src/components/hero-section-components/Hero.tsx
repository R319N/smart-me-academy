import { styles } from '@/styles/styles'
import { Box, Container, styled } from '@mui/material'
import React from 'react'
import HeroDetails from './HeroDetails'

const Hero = () => {
    const Overlay = styled(Box)({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundImage: `linear-gradient( to bottom left,rgba(1, 0, 2, 0.8),rgba(22, 2, 48, 0.9))`,
        zIndex: 0,
        // backdropFilter:{xs:"blur(0px)", xl:"blur(10px)"}
    });
    const BlurOverlay = styled(Box)({
        position: "absolute",
        top: 0,
        left: 0,
        backdropFilter: "blur(1px)",
        width: "100%",
        height: "100vh",
        zIndex: 0,

    })
    return (
        <Box sx={{ height: "100vh", position: "relative", overflow: "hidden" }}>
         {/* <BlurOverlay />     */}
         <Overlay />
           
            <Box
                sx={{
                    padding: 0,
                    backgroundImage: `url('/hero.jpg')`,
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Container sx={{ height: "100%", position: "relative" }}>
                    <HeroDetails />
                </Container>
            </Box>
        </Box>
    )
}

export default Hero