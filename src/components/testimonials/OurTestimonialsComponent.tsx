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
import { Box, Card, Container, Stack, Typography } from "@mui/material"
import HeaderText from "../headerBanner"

type PropType = {
    options?: EmblaOptionsType
}

const OurTestimonials: React.FC<PropType> = ({ options }) => {
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


    const [activeIndex, setActiveIndex] = useState(0)

    // Track active slide
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
        <Stack gap={4} width="100%">
            <HeaderText header="What People Say" subHeader="Testimonials" />
            <div className="embla">
                {/* Viewport */}
                <div
                    className="embla__viewport"
                    ref={emblaRef}
                    style={{
                        overflow: "hidden",
                        padding: "0 10%", // 👈 centers better on desktop
                    }}
                >

                    <div className="embla__container" style={{ display: "flex" }}>
                        {testimonialReviewData.map((review, index) => {
                            const isActive = index === activeIndex
                            return (
                                <Box
                                    key={index}
                                    className="embla__slide"
                                    sx={{
                                        flex: { xs: "0 0 90%", sm: "0 0 70%", md: "0 0 33%" }, // balanced sizing
                                        px: 1,
                                        cursor: "pointer",
                                        position: "relative",
                                        zIndex: isActive ? 2 : 1,
                                        transition: "transform 0.4s ease, z-index 0.4s ease",
                                    }}

                                >
                                    <Card
                                        sx={{
                                            p: 3,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            textAlign: "center",
                                            borderRadius: 3,
                                            backgroundColor: isActive ? "#1976d2" : "rgba(255,255,255,0.08)",
                                            color: isActive ? "#fff" : "inherit",
                                            transition: "background-color 0.4s ease, color 0.4s ease",
                                        }}
                                    >
                                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                                            {review.author}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                            {review.relationship}
                                        </Typography>
                                        <Typography variant="body1">{review.testimonial}</Typography>
                                    </Card>
                                </Box>
                            )
                        })}
                    </div>
                </div>

                {/* Controls */}
                <div className="embla__controls">
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>

                    <div className="embla__dots">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={`embla__dot ${index === activeIndex ? "embla__dot--selected" : ""
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </Stack>
    )
}

export default OurTestimonials
