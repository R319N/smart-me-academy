// import React from 'react'
// import { Box, Container, styled } from '@mui/material'
// import HeroDetails from './HeroDetails';
// import { styles } from '@/styles/styles';
// // import HeroDetails from './HeroDetails';
// // import AnimatedText from './animatedText';
// // import ParticlesComponent from '../particles';

// const Hero = () => {

//     return (
//         <Box sx={{ height: "100vh", position: "relative", overflow: "hidden" }}>
//             <Box
//                 sx={{
//                     padding: 0,
//                     backgroundImage: `url('/hero.jpg')`,
//                     height: "100%",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     backgroundRepeat: "no-repeat",
//                 }}
//             >
//                 <Overlay />
//                 <BlurOverlay sx={{ display: { xs: "none", lg: "flex" } }} />
//                 <Box sx={{ position: "relative", overflow: "hidden", zindex: 0 }}>
//                     {/* <ParticlesComponent /> */}
//                 </Box>
//                 <Container sx={styles.center_flex}>

//                     <Box
//                         sx={{
//                             display: "flex",
//                             width: "100%",
//                             height: "100vh",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             position: "relative",
//                             zindex: 5
//                         }}>
//                         <Box sx={{
//                             height: "100%",
//                             width: "100%",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: { xs: "center", lg: "flex-start" },
//                             my: "10vh"
//                         }}>
//                             <HeroDetails />
//                         </Box>

//                         {/* <Box
//                             sx={{
//                                 height: "100vh",
//                                 position: "relative",
//                                 display: { xs: "none", sm: "block" }
//                             }}>
//                             <Image
//                                 src="/creator3.png"
//                                 alt="developer"
//                                 width={400}
//                                 height={100}
//                                 style={{
//                                     width: "200%", height: "100%", opacity: "1", position: "relative", zIndex: "2",


//                                 }}
//                             />
//                             <div className="gradient-05" />
//                         </Box> */}
//                     </Box>
//                 </Container>
//                 {/* <Box sx={{ height: "100%", overflow: "hidden" }}>
//           <AnimatedText />
//         </Box> */}
//             </Box>
//         </Box>
//     )
// }

// export default Hero


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
                <Container sx={{ ...styles.center_flex, height: "100%" , position:"relative"}}>
                    <HeroDetails />
                </Container>
            </Box>
        </Box>
    )
}

export default Hero