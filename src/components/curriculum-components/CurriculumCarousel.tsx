// // // "use client";
// // // import React, { useState, useEffect } from "react";
// // // import Slider from "react-slick";
// // // import "slick-carousel/slick/slick.css";
// // // import "slick-carousel/slick/slick-theme.css";
// // // import Box from "@mui/material/Box";
// // // import Typography from "@mui/material/Typography";
// // // import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// // // import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// // // import HeaderBanner from "../headerBanner";
// // // import HeadingText from "../headerBanner";
// // // // import ourServices from "@/utils/data/our_servicesData";

// // // import styles from "./MyCarousel.module.css";
// // // import Image from "next/image";
// // // import ourServices from "@/utils/data/ourCurriculum";
// // // import { TitleText } from "../CustomTexts";
// // // import { Container } from "@mui/material";
// // // import ourSubjects from "@/utils/data/ourCurriculum";
// // // import SlidingText from "../CustomizedComponents/SlidingText";
// // // // import { TitleText } from "../CustomTexts";
// // // // import Image from "next/image";

// // // interface ArrowProps {
// // //     onClick?: () => void; // Make onClick optional since react-slick will assign it automatically
// // // }

// // // const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
// // //     return (
// // //         <Box
// // //             className={styles.nextArrow}
// // //             onClick={onClick}
// // //             sx={{
// // //                 background: "#00000055",
// // //                 padding: "0.2rem",
// // //                 borderRadius: "50%",
// // //                 height: "2rem",
// // //                 width: "2rem",
// // //                 display: "flex",
// // //                 justifyContent: "center",
// // //                 alignItems: "center",
// // //                 "&:hover": {
// // //                     background: "#000000",
// // //                 },
// // //             }}
// // //         >
// // //             <ArrowForwardIosIcon
// // //                 sx={{
// // //                     fontSize: "1.5rem",
// // //                     fontWeight: "bolder",
// // //                     color: "#dec5e3",
// // //                 }}
// // //             />
// // //         </Box>
// // //     );
// // // };

// // // const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
// // //     return (
// // //         <Box
// // //             className={styles.prevArrow}
// // //             onClick={onClick}
// // //             sx={{
// // //                 background: "#00000055",
// // //                 paddingLeft: "0.55rem",
// // //                 borderRadius: "50%",
// // //                 height: "2rem",
// // //                 width: "2rem",
// // //                 display: "flex",
// // //                 justifyContent: "center",
// // //                 alignItems: "center",
// // //             }}
// // //         >
// // //             <ArrowBackIosIcon sx={{ fontSize: "1.5rem", color: "#dec5e3" }} />
// // //         </Box>
// // //     );
// // // };
// // // const CurriculumCarousel = () => {
// // //     const [activeSlide, setActiveSlide] = useState(0);
// // //     const header = "what i do";
// // //     const subHeader =
// // //         "We also offer graphic design, web design, branding, content creation, social media management, SEO optimization, and digital marketing to enhance your brand's online presence.";
// // //     const settings = {
// // //         centerMode: true,
// // //         centerPadding: "10%",
// // //         autoplay: true,
// // //         autoplaySpeed: 10000,
// // //         dots: false,
// // //         infinite: true,
// // //         speed: 500,
// // //         slidesToShow: 3,
// // //         slidesToScroll: 1,
// // //         beforeChange: (current: number, next: number) => setActiveSlide(next),
// // //         nextArrow: <NextArrow />,
// // //         prevArrow: <PrevArrow />,
// // //         responsive: [
// // //             {
// // //                 breakpoint: 1200,
// // //                 settings: {
// // //                     slidesToShow: 3,
// // //                     slidesToScroll: 1,
// // //                     centerPadding: "30px",
// // //                 },
// // //             },
// // //             {
// // //                 breakpoint: 912,
// // //                 settings: {
// // //                     slidesToShow: 3,
// // //                     slidesToScroll: 1,
// // //                     centerPadding: "1rem",
// // //                 },
// // //             },
// // //             {
// // //                 breakpoint: 600,
// // //                 settings: {
// // //                     slidesToShow: 1,
// // //                     slidesToScroll: 1,
// // //                     centerPadding: "15%",
// // //                 },
// // //             },
// // //         ],
// // //     };

// // //     useEffect(() => {
// // //         // Ensure the initial center slide is styled
// // //         document.querySelectorAll(".slick-slide").forEach((slide, index) => {
// // //             if (index === 2) {
// // //                 slide.classList.add("center-slide");
// // //             }
// // //         });
// // //     }, []);


// // //     return (
// // //         // <Container
// // //         //     sx={{
// // //         //         width: "100%",
// // //         //         height: "100%",
// // //         //         overflow: "hidden",
// // //         //     }}
// // //         // >
// // //         <Box width="100%">

// // //             <Box
// // //                 sx={{
// // //                     // px: { xs: "1, lg: 0 },
// // //                 }}
// // //             >
// // //                 <Slider {...settings}>
// // //                     {ourSubjects.map((service, index) => (
// // //                         <Box
// // //                             key={index}
// // //                             className={`${styles.cardWrapper} ${activeSlide === index ? styles.activeCard : ""}`}
// // //                         >
// // //                             <Box
// // //                                 className={styles.card}
// // //                             >
// // //                                 <Box className={styles.cardContent}>
// // //                                     <Box sx={{
// // //                                         position: "relative",
// // //                                         height: "200px",
// // //                                         width: "100%"
// // //                                     }}
// // //                                     >
// // //                                         <Image
// // //                                             src={service.imgURL}
// // //                                             alt={`${service.name}`}
// // //                                             width={300}
// // //                                             height={200}
// // //                                             // fill
// // //                                             style={{
// // //                                                 width: "100%",
// // //                                                 height: "100%",
// // //                                                 objectFit: "cover",
// // //                                                 zIndex: "1",
// // //                                                 borderRadius: "8px"
// // //                                             }}
// // //                                         />

// // //                                     </Box>
// // //                                 </Box>
// // //                                 <Box className={styles.cardBackdrop} />
// // //                             </Box>

// // //                         </Box>
// // //                     ))}

// // //                 </Slider>
// // //                 <Box sx={{ textAlign: "right", my: 0 }}>
// // //                     <SlidingText
// // //                         key={activeSlide} // forces re-render when activeSlide changes
// // //                         title={ourSubjects[activeSlide]?.name}
// // //                     />
// // //                 </Box>

// // //             </Box>
// // //         </Box>
// // //     )
// // // }

// // // export default CurriculumCarousel
// // "use client";

// // import React, { useCallback, useEffect, useState } from "react";
// // import useEmblaCarousel from "embla-carousel-react";
// // import Box from "@mui/material/Box";
// // import Image from "next/image";
// // import ourSubjects from "@/utils/data/ourCurriculum";
// // import SlidingText from "../CustomizedComponents/SlidingText";

// // const CurriculumCarousel = () => {
// //   const [emblaRef, emblaApi] = useEmblaCarousel({
// //     loop: true,
// //     align: "center",
// //     skipSnaps: false,
// //   });
// //   const [activeSlide, setActiveSlide] = useState(0);

// //   const onSelect = useCallback(() => {
// //     if (!emblaApi) return;
// //     setActiveSlide(emblaApi.selectedScrollSnap());
// //   }, [emblaApi]);

// //   useEffect(() => {
// //     if (!emblaApi) return;
// //     emblaApi.on("select", onSelect);
// //     onSelect(); // set initial
// //   }, [emblaApi, onSelect]);

// //   return (
// //     <Box width="100%">
// //       <Box ref={emblaRef} className="embla">
// //         <Box className="embla__container">
// //           {ourSubjects.map((service, index) => (
// //             <Box
// //               key={index}
// //               className={`embla__slide ${
// //                 activeSlide === index ? "active-slide" : ""
// //               }`}
// //             >
// //               <Box
// //                 sx={{
// //                   position: "relative",
// //                   height: 200,
// //                   width: "100%",
// //                   borderRadius: "8px",
// //                   overflow: "hidden",
// //                 }}
// //               >
// //                 <Image
// //                   src={service.imgURL}
// //                   alt={service.name}
// //                   fill
// //                   style={{ objectFit: "cover" }}
// //                 />
// //               </Box>
// //             </Box>
// //           ))}
// //         </Box>
// //       </Box>

// //       <Box sx={{ textAlign: "right", my: 1 }}>
// //         <SlidingText
// //           key={activeSlide}
// //           title={ourSubjects[activeSlide]?.name}
// //         />
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default CurriculumCarousel;
// // "use client";

// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Box from "@mui/material/Box";
// import Image from "next/image";
// import ourSubjects from "@/utils/data/ourCurriculum";
// import SlidingText from "../CustomizedComponents/SlidingText";

// const CurriculumCarousel = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: "center",
//     skipSnaps: false,
//   });
//   const [activeSlide, setActiveSlide] = useState(0);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setActiveSlide(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onSelect);
//     onSelect(); // set initial
//   }, [emblaApi, onSelect]);

//   return (
//     <Box width="100%">
//       <Box ref={emblaRef} className="embla">
//         <Box className="embla__container">
//           {ourSubjects.map((service, index) => (
//             <Box
//               key={index}
//               className={`embla__slide ${
//                 activeSlide === index ? "active-slide" : ""
//               }`}
//             >
//               <Box
//                 sx={{
//                   position: "relative",
//                   height: 200,
//                   width: "100%",
//                   borderRadius: "8px",
//                   overflow: "hidden",
//                 }}
//               >
//                 <Image
//                   src={service.imgURL}
//                   alt={service.name}
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>

//       <Box sx={{ textAlign: "right", my: 1 }}>
//         <SlidingText
//           key={activeSlide}
//           title={ourSubjects[activeSlide]?.name}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default CurriculumCarousel;

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
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center", // 👈 keeps active slide centered
            skipSnaps: false,
            ...options,
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

