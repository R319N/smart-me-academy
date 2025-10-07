import HeadingText from '../headerBanner'
import SlidingText from '../CustomizedComponents/SlidingText'
import { styles } from '@/styles/styles'
import CurriculumCarousel from './CurriculumCarousel'
import React, { useCallback, useEffect, useState } from "react"
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"
import { DotButton, useDotButton } from "../curriculum-components/EmblaCarouselDotButton"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import {
    usePrevNextButtons,
    PrevButton,
    NextButton,
} from "../curriculum-components/EmblaCarouselArrowButtons"
import testimonialReviewData from "@/utils/data/testimonial_reviewData"
import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material"
import HeaderText from "../headerBanner"
import ourSubjects from '@/utils/data/ourCurriculum'
import Image from 'next/image'
import { Edu_SA_Hand } from 'next/font/google'
import pxToRem from '@/utils/darkTheme/functions/pxToRem'

type PropType = {
    options?: EmblaOptionsType
}
const Curriculum: React.FC<PropType> = ({ options }) => {

    return (
        <Stack gap={4}>
            <HeadingText header="Our Subjects" subHeader="Explore our comprehensive curriculum" />
            <CurriculumCarousel />
        </Stack >
    )
}


export default Curriculum