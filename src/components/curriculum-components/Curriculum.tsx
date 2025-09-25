import { Box, Container } from '@mui/material'
import React from 'react'
import HeadingText from '../headerBanner'
import SlidingText from '../CustomizedComponents/SlidingText'
import CurriculumCarousel from './CurriculumCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const Curriculum = () => {
    const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return (
        <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
            <Box sx={{ mt: "3rem" }}>
                <HeadingText header="Our Subjects" subHeader="Explore our comprehensive curriculum" />
            </Box>
            <Container>
                <CurriculumCarousel options={OPTIONS} />

            </Container>

        </Container>
    )
}

export default Curriculum