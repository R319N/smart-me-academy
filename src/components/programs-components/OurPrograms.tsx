import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import HeadingText from '../headerBanner'
// import { styles } from '@/styles/styles'
import Link from 'next/link'
import GlowingButtonOutlined from '../glowingButtonOutlined'
import GlowingIconButton from '../GlowingIconButton'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { programData } from '@/utils/data/programsData'
import Image from 'next/image'
import xstyles from './OurPrograms.module.css'
import { Info, InfoOutline } from '@mui/icons-material'
import { styles } from '@/styles/styles'

const OurPrograms = () => {
    return (
        <Container>
            <Box sx={{ mt: "3rem" }}>
                <HeadingText header="Our Programs" subHeader="Explore our comprehensive curriculum" />
            </Box>
            <Grid
                container
                spacing={1}
                sx={{
                    width: "100%",
                    padding: "0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {programData.map((program, index) => (
                    <Grid
                        size={{ xs: 12, sm: 4, md: 4 }}
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            mt: "4rem"

                        }}
                    >

                        <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
                            <Box
                                sx={{ ...styles.glassOutlined, height: { xs: "100%", sm: "250px" } }}
                            >
                                <Box>
                                    <Box sx={{
                                        position: "relative"
                                    }}
                                        height="24vh" px={1} mt="-15%" py={1}>
                                        <Image
                                            src={program.imgUrl}
                                            alt={`${program.name}`}
                                            width={300}
                                            height={300}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                zIndex: "1",
                                                borderRadius: "8px"
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box className={xstyles.cardBackdrop} />
                                <CardContent>
                                    <Stack gap={0.5} sx={{
                                        // display: "flex",
                                        // flexDirection: "column",
                                        // justifyContent: "space-between",
                                        // alignItems:"center",
                                        // height: "100px"
                                    }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                display: "flex",
                                                textTransform: "capitalize",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                                fontSmooth: "always",
                                                // lineHeight: "1.4rem"
                                            }}
                                        >
                                            <Box
                                                component="span"
                                                sx={{ color: "textPrimary", my: "0" }}
                                            >
                                                {program.name.split(" ")[0]}
                                            </Box>
                                            &nbsp;
                                            <Box
                                                component="span"
                                                sx={{ color: "#449DD1", display: "block" }}
                                            >
                                                {program.name.split(" ").slice(1).join(" ")}
                                            </Box>
                                        </Typography>
                                        <Box sx={{ height: { xs: "100%", md: "70px" } }}>
                                            <Typography variant="body2">
                                                {program.description.length > 120
                                                    ? program.description.slice(0, program.description.length / 2.5) + "..."
                                                    : program.description}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "right" }}>
                                            {/* <Link href={`/programs/${program._id}`} passHref> */}
                                            <GlowingButtonOutlined variant="outlined" size="small"
                                                endIcon={<InfoOutline />}
                                                sx={{ padding: "2px 1rem" }}>
                                                Learn More
                                            </GlowingButtonOutlined>
                                            {/* </Link> */}
                                        </Box>
                                    </Stack>
                                </CardContent>


                            </Box>

                        </motion.div>
                    </Grid>
                ))}
            </Grid>
            <Box my={4} display="flex" justifyContent="right" width="100%">
                <Button variant='contained'>View All Programs</Button>
            </Box>
        </Container>

    )
}



export default OurPrograms