import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import HeadingText from '../headerBanner'
import SlidingText from '../CustomizedComponents/SlidingText'
import CurriculumCarousel from './CurriculumCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { styles } from '@/styles/styles'

const Curriculum = () => {
    const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return (
        <Stack gap={6}>
            <Box>
                <HeadingText header="Our Subjects" subHeader="Explore our comprehensive curriculum" />
            </Box>
            <Box>
                <CurriculumCarousel options={OPTIONS} />
            </Box>
        </Stack>
    )
}

export default Curriculum