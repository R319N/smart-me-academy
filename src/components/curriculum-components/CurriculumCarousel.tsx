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
import pxToRem from '@/utils/darkTheme/functions/pxToRem'
import EduSaHandFontWrapper from '@/layouts/wrappers/EduSAHandWrapper'
import { ExoFontWrapper } from '@/layouts/wrappers/PoppinsWrapper'

type PropType = {
  options?: EmblaOptionsType
}
const Curriculum: React.FC<PropType> = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,          // infinite loop
      align: "center",     // keep active slide centered
      skipSnaps: false,
      containScroll: "trimSnaps", // 👈 keeps things aligned
      ...options,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop

    resetOrStop()
  }, [])

  const { scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <Stack gap={3}>
      <div className="embla">
        <Box
          className="embla__viewport"
          ref={emblaRef}
          sx={{
            // overflow: "hidden",
        padding: { xs: "0", sm: "0 10%", md: "0 8%" }, 
            // height // 👈 centers better on desktop
          }}
        >
          <div className="embla__container" style={{ display: "flex" }}>
            {ourSubjects.map((service, index) => {
              const isActive = index === activeIndex
              return (
                <Box
                  key={index}
                  sx={{
                   flex: { xs: "0 0 80%", sm: "0 0 70%", md: "0 0 50%" },  // balanced sizing
                    pr: { xs: "1rem", sm: "1rem" },//slide spacing
                    // mb: "2rem",
                    cursor: "pointer",
                    position: "relative",
                    zIndex: isActive ? 2 : 1,
                    width: { xs: "55px", sm: "100%" },
                    // height: "364px",
                    transition: "transform 0.4s ease, z-index 0.4s ease",
                    overflow: "visible",


                  }}

                >
                  <Box
                    // key={index}
                    className="embla__slide"
                    sx={{
                      minWidth: { xs: "100%", md: isActive ? "400px" : "120px" },
                      overflow: "hidden",
                      width: "90%",
                      // minHeight: { xs: "364px", md: isActive ? "100px" : "150px" },
                      height: { xs: "364px", md: isActive ? "224px" : "200px" },

                      borderRadius: "8px",
                      backgroundColor: isActive ? "#1976d2" : "rgba(255,255,255,0.08)",
                      opacity: isActive ? 1 : 0.3,
                      backdropFilter: "blur(10px)",
                      color: isActive ? "#fff" : "inherit",
                      transition: "background-color 0.4s ease, color 0.4s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={service.imgURL}
                      alt={service.name}
                      fill
                      // width={100}
                      // height={100}
                      style={{

                        objectFit: "cover",
                        // width: "100%",
                        // height: "100%"
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#010b13ee",
                        zIndex: 99,
                        transition: "background-color 0.5s ease",
                        ...styles.center_flex
                      }}
                    >
                      <ExoFontWrapper>
                        <Typography variant='h3' color='text.secondary' sx={{
                          fontWeight: (theme) => theme.typography.fontWeightBold,
                        }}>
                          {service.name}
                        </Typography>
                      </ExoFontWrapper>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </div>
        </Box>
      </div >
      <Box sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // position: "relative",
        height: "100%"
      }}>
        <Box
          sx={{
            width: { xs: "95%", sm: "75%" },
            display: "flex", justifyContent: "space-between", alignItems: "center",
            position: "absolute",
            bottom: "45vh",
            // transform: "translateY(-50%, 50%)",
            zIndex: 99
          }}
        >
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%", display: "flex", justifyContent: "center", position: "relative"
        }}>
        <Box className="embla__dots" gap={0.5}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${index === activeIndex ? "embla__dot--selected" : ""
                }`}
            />
          ))}
        </Box>
      </Box>
    </Stack>
  )
}

export default Curriculum
