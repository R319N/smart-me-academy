import { Box, Container } from '@mui/material'
import React from 'react'
import HeadingText from '../headerBanner'
import SlidingText from '../CustomizedComponents/SlidingText'
import CurriculumCarousel from './CurriculumCarousel'

const Curriculum = () => {
    return (
        <Container>
            <Box sx={{ mt: "3rem" }}>
                <HeadingText header="Our Subjects" subHeader="Explore our comprehensive curriculum" />
            </Box>
            {/* <Container> */}
                <CurriculumCarousel />
            {/* </Container> */}
            <SlidingText /> 
        </Container>
    )
}

export default Curriculum