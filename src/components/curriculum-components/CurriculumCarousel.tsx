"use client"
import React, { useCallback, useEffect, useState } from "react"
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"
import { DotButton, useDotButton } from "./EmblaCarouselDotButton"
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import ourSubjects from "@/utils/data/ourCurriculum"
import { Box } from "@mui/material"
import { styles } from "@/styles/styles"
import xstyles from "./MyCarousel.module.css";
import Image from "next/image"

type PropType = {
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    // const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center", // 👈 keeps active slide centered
            skipSnaps: false,
            // ...options,
        },
        [Autoplay()]
    )

    const [activeIndex, setActiveIndex] = useState(0)

    // 🔑 Track the centered active slide
    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setActiveIndex(emblaApi.selectedScrollSnap())
        }

        emblaApi.on("select", onSelect)
        onSelect() // run once on mount
    }, [emblaApi])

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])

    const { scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onNavButtonClick
    )

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi, onNavButtonClick)

    return (
        <Box my="2rem" className="embla">
            <div
                className="embla__viewport"
                ref={emblaRef}
                style={{
                    overflow: "hidden",
                    padding: "0 12px", // 👈 spacing on edges
                }}
            >
                <div
                    className="embla__container"
                    style={{
                        display: "flex",
                    }}
                >
                    {ourSubjects.map((service, index) => (
                        <Box
                            key={index}
                            className="embla__slide"
                            sx={{
                                flex: {
                                    xs: "0 0 70%", // mobile: 70% width
                                    sm: "0 0 50%", // tablet: 50% width
                                    md: "0 0 40%", // desktop: 30% width
                                },
                                padding: "0 8px", // spacing between slides
                                boxSizing: "border-box",
                            }}
                        >
                            <Box
                                sx={{
                                    // ...styles.out,
                                    overflow: "hidden",
                                    borderRadius: "12px",
                                    backgroundColor:
                                        index === activeIndex
                                            ? "#1976d2"
                                            : "rgba(255,255,255,0.08)",
                                    backdropFilter: index === activeIndex
                                        ? "blur(0px)"
                                        : "blur(8px)",
                                    height: "240px", // example height
                                }}
                            >
                                <Box className={xstyles.cardContent}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            height: "100%",
                                            width: "100%",
                                            borderRadius: "8px",
                                            overflow: "hidden", // keep overlay clipped inside the card
                                        }}
                                    >
                                        {/* Image */}
                                        <Box
                                            height="240px"
                                            width="100%"

                                        >
                                            <Image
                                                src={service.imgURL}
                                                alt={service.name}
                                                fill
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />

                                        </Box>


                                        {/* Overlay */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor: index === activeIndex ? "transparent" : "rgba(0, 10, 20, 0.77)", // 👈 semi-transparent overlay
                                                zIndex: 1,
                                            }}
                                        />
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                    ))}
                </div>
            </div>
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
        </Box>

    )
}

export default EmblaCarousel

