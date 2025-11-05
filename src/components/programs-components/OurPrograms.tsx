// "use client"

// import React from "react"
// import { Box, Button, Container, Grid, Typography } from "@mui/material"
// import HeadingText from "../headerBanner"
// import { motion } from "framer-motion"
// import { fadeIn } from "@/utils/motion"
// import { programData } from "@/utils/data/programsData"
// import Image from "next/image"
// import { styles } from "@/styles/styles"
// import GlowingButtonOutlined from "../glowingButtonOutlined"
// import { Info, InfoOutline } from "@mui/icons-material"

// const OurPrograms = () => {
//     return (
//         <Container>
//             <Box sx={{ mt: "4rem" }}>
//                 <HeadingText
//                     header="Our Programs"
//                     subHeader="Explore our comprehensive curriculum"
//                 />
//             </Box>

//             <Grid
//                 container
//                 spacing={2}
//                 sx={{
//                     width: "100%",
//                     justifyContent: "center",
//                     alignItems: "center",
//                 }}
//             >
//                 {programData.map((program, index) => (
//                     <Grid
//                         key={index}
//                         size={{ xs: 12, sm: 6, md: 4 }}
//                         sx={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             flexDirection: "column",
//                             mt: 3,
//                             width: "100vw",

//                         }}
//                     >
//                         <motion.div style={{ width: "100%" }} variants={fadeIn("up", "spring", index * 0.3, 1)}>
//                             <Box
//                                 sx={{
//                                     ...styles.glassOutlinedDark,
//                                     position: "relative", // REQUIRED for next/image fill
//                                     width: "100%",
//                                     height: { xs: 240, sm: "40vh", },
//                                     // borderRadius: 2,
//                                     overflow: "hidden",
//                                 }}
//                             >
//                                 <Image
//                                     src={program.imgUrl}
//                                     alt={program.name}
//                                     fill
//                                     style={{
//                                         objectFit: "fill",
//                                     }}
//                                 />
//                                 <Box
//                                     sx={{
//                                         position: "absolute",
//                                         backgroundColor: "rgba(0, 0, 0, 0.85)",
//                                         inset: 0,
//                                         display: "flex",
//                                         justifyContent: "flex-end",
//                                         alignItems: "end"
//                                     }}
//                                     gap={2}
//                                 >
//                                     <Box
//                                         sx={{
//                                             display: "flex",
//                                             backgroundColor: "#00000047",
//                                             backdropFilter: "blur(5px)",
//                                             width: "100%",
//                                             justifyContent: "space-between",
//                                             alignItems: "center",
//                                             p: "0.5rem 1rem",
//                                         }}
//                                     >
//                                         <Typography
//                                             variant="body1"
//                                             color="textSecondary"
//                                             sx={{
//                                                 fontWeight: "regular",
//                                                 textTransform: "capitalize",
//                                                 mb: 1,
//                                             }}
//                                         >
//                                             {program.name}
//                                         </Typography>
//                                         <GlowingButtonOutlined size="small" endIcon={<InfoOutline sx={{ width: 16, height: 16 }} />}>
//                                             More Info
//                                         </GlowingButtonOutlined>
//                                     </Box>
//                                 </Box>
//                                 <Box sx={{ position: "relative", width: "100vw" }}>

//                                 </Box>

//                             </Box>
//                         </motion.div>
//                     </Grid>
//                 ))}
//             </Grid>

//             <Box my={4} display="flex" justifyContent="flex-end" width="100%">
//                 <Button variant="contained">View All Programs</Button>
//             </Box>
//         </Container>
//     )
// }

// export default OurPrograms
"use client"

import React, { useState } from "react"
import { Box, Button, Container, Grid, Typography } from "@mui/material"
import HeadingText from "../headerBanner"
import { motion, AnimatePresence } from "framer-motion"
import { fadeIn } from "@/utils/motion"
import { programData } from "@/utils/data/programsData"
import Image from "next/image"
import { styles } from "@/styles/styles"
import GlowingButtonOutlined from "../glowingButtonOutlined"
import { InfoOutlined, Close, ArrowDownward, ArrowUpward } from "@mui/icons-material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'


const OurPrograms = () => {
  // Track which card is open
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Container sx={{ ...styles.container, py:"4rem"}} >
      <Box sx={{ py: "4rem" }}>
        <HeadingText
          header="Our Programs"
          subHeader="Explore our comprehensive curriculum"
          subHeaderColor="text.primary"
          color1="text.primary"
        />
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {programData.map((program, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: 3,
            }}
          >
            <motion.div
              style={{ width: "100%" }}
              variants={fadeIn("up", "spring", index * 0.3, 1)}
            >
              <Box
                sx={{
                  ...styles.glassOutlinedDark,
                  position: "relative",
                  width: "100%",
                  height: { xs: 280, },
                  overflow: "hidden",
                  borderRadius: 2,
                }}
              >
                {/* Background Image */}
                <Image
                  src={program.imgUrl}
                  alt={program.name}
                  fill
                  style={{ objectFit: "cover" }}
                />

                {/* Dark Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "#010b13cc",
                    zIndex: 1,
                  }}
                />

                {/* Footer Bar (Program name + More Info button) */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: "rgba(0,0,0,0.45)",
                    backdropFilter: "blur(4px)",
                    zIndex: 3,
                    p: "0.6rem 1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    color="secondary.main"
                    sx={{
                      // color: "white",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    {program.name}
                  </Typography>
                  <GlowingButtonOutlined
                    size="small"
                    endIcon={
                      openIndex === index ? (
                        <ExapandLessIcon sx={{ width: 16, height: 16 }} />
                      ) : (
                        <ExpandMoreIcon sx={{ width: 16, height: 16 }} />
                      )
                    }
                    onClick={() => handleToggle(index)}
                  >
                    {openIndex === index ? "Less Info" : "More Info"}
                  </GlowingButtonOutlined>
                </Box>

                {/* Slide-up Description */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "#010b13ff)",
                        backdropFilter: "blur(5px)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "1.5rem",
                        marginBottom: "3.5rem",
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          maxWidth: 300,
                          textAlign: "left",
                          fontWeight: (theme) => theme.typography.fontWeightMedium
                        }}
                      >
                        {program.description || "Detailed info coming soon..."}
                      </Typography>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* <Box my={4} display="flex" justifyContent="flex-end" width="100%">
        <Button variant="contained">View All Programs</Button>
      </Box> */}
    </Container>
  )
}

export default OurPrograms

