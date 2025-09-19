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
import styles from './OurPrograms.module.css'
import { Info, InfoOutline } from '@mui/icons-material'

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


                            {/* <Card
                                        sx={{
                                            ...styles.cardStyle,
                                            ...styles.borderRadius,
                                            width: { xs: "82vw", lg: "300px" },
                                            height: "400px",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: "relative",
                                                height: "500px",
                                                width: "100%",
                                                padding: "1rem"
                                            }}
                                        >
                                            <Image
                                                // component={Image}
                                                src={program.imgUrl}
                                                alt="projects"
                                                // fill
                                                height={100}
                                                width={100}
                                                // sx={{
                                                //     opacity: "0.8",
                                                //     "&:active, &:active:focus, &:hover": {
                                                //         opacity: "1",
                                                //     },
                                                // }}
                                            />
                                        </Box>
                                        <Box my="1rem" padding="0 1rem"
                                            sx={{
                                                gap: "10", height: "100%",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                flexDirection: "column"
                                            }}
                                        >
                                            <Stack mb="2rem" gap={1}>
                                                <Typography
                                                    variant="subtitle1"

                                                    sx={{ textTransform: "uppercase", fontWeight: "Regular" }}
                                                >
                                                    {program.name}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color='#5C6584'
                                                    sx={{ textTransform: "capitalize", }}
                                                >
                                                    {program.description}
                                                </Typography>
                                            </Stack>
                                            //  {/* <Link href={{ pathname: "/portfolio", query: { id: project.id } }}>  
                                            <GlowingButtonOutlined
                                                variant="outlined"
                                                sx={{ zIndex: 5 }}
                                            >
                                                view project
                                            </GlowingButtonOutlined>
                                             </Link> 
                                        </Box>
                                    </Card> */}
                            <Box
                                className={styles.card}
                            >
                                <Box className={styles.cardContent}>
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
                                    <Box
                                        sx={{
                                            display: "flex",
                                            margin: "auto",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            zIndex: "3",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                // backgroundImage:
                                                //     "linear-gradient(45deg, #449DD130 0%, #9A48D030 100%)",
                                                minWidth: "180px",
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                p: "1rem",
                                                backdropFilter: "blur(10px)",
                                                borderRadius: "10px",
                                                // border: "1px solid #dec5e315",
                                                textRendering: "optimizeLegibility",
                                                // "-webkit-font-smoothing": "antialiased",
                                                // "-moz-osx-font-smoothing": "grayscale",
                                            }}
                                        >
                                            {/* <>{service.icon}</> */}
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    textTransform: "capitalize",
                                                    fontWeight: "bold",
                                                    textAlign: "center",
                                                    fontSmooth: "always",
                                                    lineHeight: "1.4rem"
                                                }}
                                            >
                                                <Box
                                                    component="span"
                                                    sx={{ color: "#dec5e3", my: "0" }}
                                                >
                                                    {program.name.split(" ")[0]}
                                                </Box>
                                                <Box
                                                    component="span"
                                                    sx={{ color: "#449DD1", display: "block" }}
                                                >
                                                    {program.name.split(" ").slice(1).join(" ")}
                                                </Box>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.cardBackdrop} />
                                <CardContent>
                                    <Stack gap={2}>
                                        <Box className={styles.descriptionWrapper}>
                                            <Typography variant="body2">
                                                {program.description.length > 120
                                                    ? program.description.slice(0, program.description.length / 2.5) + "..."
                                                    : program.description}
                                            </Typography>
                                            {/* <Box className={styles.fadeOut} /> */}
                                        </Box>

                                        <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "right" }}>
                                            {/* <Link href={`/programs/${program._id}`} passHref> */}
                                            <GlowingButtonOutlined variant="outlined" size="small"
                                                endIcon={<InfoOutline />}
                                                sx={{ height: "8px", padding: "2px 1rem" }}>
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