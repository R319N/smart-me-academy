import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import HeadingText from '../headerBanner'
import MasonryImageList from './MasonryImageList'
import { styles } from '@/styles/styles'
import GlowingButton from '../glowingButton'

const AboutUs = () => {
    return (
        <Container>
            <Box gap={2}>
                <Box sx={{ p: "3rem 0 2rem 0 " }}>
                    <HeadingText header="about us" subHeader='learn more about us' />
                </Box>
                <Stack gap={5}>
                    <Box sx={styles.center_flex} >
                        <Typography variant='body2' width="70%" textAlign="center">
                            Education is more than knowledge; it&apos;s the key to transformation. At Smart Me Academy,
                            we believe that true training shapes not only minds but perspectives,
                            fostering a deeper understanding of the world. Our programs empower students to develop critical skills
                            and self-awareness, preparing them to make meaningful contributions to society.
                        </Typography>
                    </Box>
                    <MasonryImageList />
                    <Stack gap={2} sx={{ ...styles.center_flex, flexDirection: "column", height:"100%" }} >
                        <Typography variant='body1' width="70%" textAlign="center">
                            Every learner has the potential to succeed, and at Smart Me Academy, we provide the tools and support to unlock that potential.
                            With a strong foundation and a passion for learning, our students are equipped to achieve their dreams.
                        </Typography>
                        <GlowingButton>
                            More About Us
                        </GlowingButton>
                    </Stack>
                </Stack>

            </Box>

        </Container>
    )
}

export default AboutUs