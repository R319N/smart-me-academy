import { styles } from '@/styles/styles'
import { Box, Container, styled } from '@mui/material'
import React from 'react'
import HeroDetails from './HeroDetails'
import HeroBackground from './HeroBackground'

const Hero = () => {
    const Overlay = styled(Box)({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // backgroundImage:
        //     "linear-gradient(ellipse farthest-corner at 0 140% ,#000A14 40%,#0b05c146 60%)",
        zIndex: 0,
        background:
         "radial-gradient(ellipse 100% 900% at 0% 80%, #000a14e4 20%, #000a14c8 40%, #000a14e8 100%),  radial-gradient(ellipse 100% 200% at 25% 80%,  #17ade8ff, transparent 70%)" ,
        backgroundBlendMode: "multiply",
        // transform:"rotate(40deg)"
        // backdropFilter:{xs:"blur(0px)", xl:"blur(10px)"}  {/*radial-gradient(ellipse 50%, 70% at 25% 80%, #f0f, transparent 70%)*/}
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
            <Overlay />
            <Box
                sx={{
                    padding: 0,
                    backgroundImage: `url('gallery/hero.jpg')`,
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* <HeroBackground /> */}
                <Container sx={{ height: "100%" }}>
                    <HeroDetails />
                </Container>
            </Box>
        </Box>
    )
}

export default Hero