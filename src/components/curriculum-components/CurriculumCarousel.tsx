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
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center", // 👈 keeps active slide centered
            skipSnaps: false,
        },
        [Autoplay()]
    )
    const [activeIndex, setActiveIndex] = useState(0)

useEffect(() => {
  if (!emblaApi) return

  const onSelect = () => {
    const snapIndex = emblaApi.selectedScrollSnap()
    const realIndex = emblaApi.scrollSnapList().indexOf(snapIndex)
    setActiveIndex(realIndex)
  }

  emblaApi.on("select", onSelect)
  onSelect()
}, [emblaApi])


    // const [activeIndex, setActiveIndex] = useState(0)

    // // 🔑 Track the centered active slide
    // useEffect(() => {
    //     if (!emblaApi) return

    //     const onSelect = () => {
    //         setActiveIndex(emblaApi.selectedScrollSnap())
    //     }

    //     emblaApi.on("select", onSelect)
    //     onSelect() // run once on mount
    // }, [emblaApi])
    

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
                    overflow: "visible", // allow slides to pop out
                    padding: "0 12px",
                }}
            >
                <div
                    className="embla__container"
                    style={{
                        display: "flex",
                        overflow: "visible",
                    }}
                >
                    {ourSubjects.map((service, index) => {
                      const isActive = index === activeIndex


                        // Amount to translate the active slide left/right based on scale
                        const scaleFactor = isActive ? 1.1 : 0.95
                        return (


                            <Box
                                key={index}
                                className="embla__slide"
                                sx={{
                                    flex: { xs: "0 0 70%", sm: "0 0 50%", md: "0 0 40%" },
                                    padding: "0 8px",
                                    boxSizing: "border-box",
                                    position: "relative",
                                    zIndex: isActive ? 2 : 1,
                                    transform: `scale(${scaleFactor})`,
                                    transition: "transform 0.5s ease, z-index 0.5s ease",
                                }}
                            >

                                <Box
                                    sx={{
                                        overflow: 'hidden',
                                        borderRadius: '12px',
                                        backgroundColor: isActive ? '#1976d2' : 'rgba(255,255,255,0.08)',
                                        height: '240px',
                                        transition: 'background-color 0.5s ease',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '100%',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Image
                                            src={service.imgURL}
                                            alt={service.name}
                                            fill
                                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                        />

                                        {/* Overlay */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: isActive
                                                    ? 'transparent'
                                                    : 'rgba(0, 10, 20, 0.77)',
                                                zIndex: 1,
                                                transition: 'background-color 0.5s ease',
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })}

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

