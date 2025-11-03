"use client"

import React from "react"
import { Box, Button, Container, Grid, Typography } from "@mui/material"
import HeadingText from "../headerBanner"
import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motion"
import { programData } from "@/utils/data/programsData"
import Image from "next/image"
import { styles } from "@/styles/styles"
import GlowingButtonOutlined from "../glowingButtonOutlined"
import { Info, InfoOutline } from "@mui/icons-material"

const OurPrograms = () => {
    return (
        <Container>
            <Box sx={{ mt: "4rem" }}>
                <HeadingText
                    header="Our Programs"
                    subHeader="Explore our comprehensive curriculum"
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
                            width: "100vw",

                        }}
                    >
                        <motion.div style={{ width: "100%" }} variants={fadeIn("up", "spring", index * 0.3, 1)}>
                            <Box
                                sx={{
                                    ...styles.glassOutlinedDark,
                                    position: "relative", // REQUIRED for next/image fill
                                    width: "100%",
                                    height: { xs: 240, sm: "40vh", },
                                    // borderRadius: 2,
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={program.imgUrl}
                                    alt={program.name}
                                    fill
                                    style={{
                                        objectFit: "fill",
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        backgroundColor: "rgba(0, 0, 0, 0.85)",
                                        inset: 0,
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "end"
                                    }}
                                    gap={2}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            backgroundColor: "#00000047",
                                            backdropFilter: "blur(5px)",
                                            width: "100%",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            p: "0.5rem 1rem",
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            color="textSecondary"
                                            sx={{
                                                fontWeight: "regular",
                                                textTransform: "capitalize",
                                                mb: 1,
                                            }}
                                        >
                                            {program.name}
                                        </Typography>
                                        <GlowingButtonOutlined size="small" endIcon={<InfoOutline sx={{ width: 16, height: 16 }} />}>
                                            More Info
                                        </GlowingButtonOutlined>
                                    </Box>

                                    {/* <Typography variant="body2" sx={{ maxWidth: 320 }}>
                                            {program.description || "Discover more about this program"}
                                        </Typography>    */}
                                </Box>
                                <Box sx={{ position: "relative", width: "100vw" }}>

                                </Box>
                                {/* Background image 
                {/* <Image
                  src={program.imgUrl}
                  alt={program.name}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
*/}

                                {/* <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.45)",
                    zIndex: 2,
                  }}
                /> */}


                                {/* <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "white",
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      mb: 1,
                    }}
                  >
                    {program.name}
                  </Typography>
                  <Typography variant="body2" sx={{ maxWidth: 320 }}>
                    {program.description || "Discover more about this program"}
                  </Typography>
                </Box>  */}
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            <Box my={4} display="flex" justifyContent="flex-end" width="100%">
                <Button variant="contained">View All Programs</Button>
            </Box>
        </Container>
    )
}

export default OurPrograms

