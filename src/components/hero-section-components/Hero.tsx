// import { styles } from '@/styles/styles'
// import { Box, Container, styled } from '@mui/material'
// import React from 'react'
// import HeroDetails from './HeroDetails'
// import HeroBackground from './HeroBackground'
// import Image from 'next/image'

// const Hero = () => {
//     const Overlay = styled(Box)({
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         // backgroundImage:
//         //     "linear-gradient(ellipse farthest-corner at 0 140% ,#000A14 40%,#0b05c146 60%)",
//         zIndex: 0,
//         background:
//             "radial-gradient(ellipse 100% 900% at 0% 80%, #000a14e4 20%, #000a14c8 40%, #000a14e8 100%),  radial-gradient(ellipse 100% 200% at 25% 80%,  #17ade8ff, transparent 70%)",
//         backgroundBlendMode: "multiply",
//         // transform:"rotate(40deg)"
//         // backdropFilter:{xs:"blur(0px)", xl:"blur(10px)"}  {/*radial-gradient(ellipse 50%, 70% at 25% 80%, #f0f, transparent 70%)*/}
//     });
//     const BlurOverlay = styled(Box)({
//         position: "absolute",
//         top: 0,
//         left: 0,
//         backdropFilter: "blur(1px)",
//         width: "100%",
//         height: "100vh",
//         zIndex: 0,

//     })
//     return (
//         <Box sx={{ height: "100vh", position: "relative", overflow: "hidden" }}>
//             <HeroBackground />
//             <Container sx={{ zIndex: 20, height: "100%", position: "relative" }}>
//                 <HeroDetails />
//             </Container>
//         </Box>
//     )
// }

// export default Hero
import { styles } from '@/styles/styles'
import { Box, Container, styled } from '@mui/material'
import React from 'react'
import HeroDetails from './HeroDetails'
import HeroBackground from './HeroBackground'
import Image from 'next/image'

const Hero = () => {
    const Overlay = styled(Box)({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1, // make sure it sits above images but below text
        backgroundBlendMode: "multiply",
        background: "#010b131c"
    });

    return (
        <Box sx={{ height: "100vh", position: "relative", overflow: "hidden" }}>
            <Box sx={{ zIndex: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                <HeroBackground />
            </Box>
            <Overlay />
            <Container sx={{ zIndex: 10, height: "100%", position: "relative" }}>
                <HeroDetails />
            </Container>
        </Box>
    );
};

export default Hero;
