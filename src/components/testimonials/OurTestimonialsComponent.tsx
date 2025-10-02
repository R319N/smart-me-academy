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
                                        flex: { xs: "0 0 95%", sm: "0 0 70%", md: "0 0 50%" }, // balanced sizing
                                        px: 1,
                                        cursor: "pointer",
                                        position: "relative",
                                        zIndex: isActive ? 2 : 1,
                                        // height: "300px",
                                        transition: "transform 0.4s ease, z-index 0.4s ease",
                                    }}

                                >
                                    <Card
                                        sx={{
                                            p: "1rem",
                                            minHeight: "256px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 3,
                                            backgroundColor: isActive ? "#1976d2" : "rgba(255,255,255,0.08)",
                                            opacity: isActive ? 1 : 0.3,
                                            backdropFilter: "blur(10px)",
                                            color: isActive ? "#fff" : "inherit",
                                            transition: "background-color 0.4s ease, color 0.4s ease",
                                        }}
                                    >
                                        <Stack gap={2} sx={{
                                            display: "flex", flexDirection: "column",
                                            alignItems: "center", height: "100%",
                                            textTransform: "capitalize",
                                            justifyContent: "space-between"
                                        }}>

                                            <CardContent sx={{ p: 0 }}>
                                                <Box
                                                    sx={{
                                                        position: "relative",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        textAlign: "center",
                                                        px: 1,
                                                        // py: 2,
                                                    }}
                                                >
                                                    {/* Opening quote */}
                                                    <Typography
                                                        variant="h4"
                                                        sx={{
                                                            position: "absolute",
                                                            top: 0,
                                                            left: 0,
                                                            fontSize: "2rem",
                                                            color: "grey.500",
                                                        }}
                                                    >
                                                        &ldquo;
                                                    </Typography>

                                                    {/* Testimonial text */}
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            maxWidth: 600,
                                                            lineHeight: 1.6,
                                                            p: 2,
                                                            display: "-webkit-box",
                                                            WebkitLineClamp: 5,       // 👈 limit lines
                                                            WebkitBoxOrient: "vertical",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis",
                                                        }}
                                                    >
                                                        {review.testimonial}
                                                    </Typography>

                                                    {/* Closing quote */}
                                                    <Typography
                                                        variant="h4"
                                                        sx={{
                                                            position: "absolute",
                                                            bottom: -30,
                                                            right: 0,
                                                            fontSize: "2rem",
                                                            color: "grey.500",
                                                        }}
                                                    >
                                                        &rdquo;
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                            <Stack sx={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "right"
                                            }}
                                                alignItems="right">
                                                <Typography variant="h6" textAlign="right" fontWeight="bold" gutterBottom lineHeight={1}>
                                                    {review.author}
                                                </Typography>
                                                <Typography textAlign="right" variant="body1" color="textPrimary" gutterBottom >
                                                    {review.relationship}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Card>
                                </Box>
                            )
                        })}
                    </div>
                </div>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", position: "relative", height: "100%" }}>
                    <div style={{
                        width: "95%",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        position: "absolute",
                        bottom: 100,
                        zIndex: 99
                    }}
                    >
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                </Box>

                {/* Controls */}
                <Box
                    sx={{
                        width: "100%", display: "flex", justifyContent: "center", position: "relative", height: "100%", my: "2rem"
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

            </div>
        </Stack>
    )
}

export default OurTestimonials
