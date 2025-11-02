import { Box, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react'

const HeroBackground = () => {
    const Overlay = styled(Box)({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "#010b13e9",
        zIndex: 1,
        // backdropFilter:{xs:"blur(0px)", xl:"blur(10px)"}
    });

    const images = [
        {
            img: '/gallery/gallery1.jpg',
            title: 'Breakfast',
        },
        {
            img: '/gallery/gallery2.jpg',
            title: 'Burger',
        },
        {
            img: '/gallery/gallery3.jpg',
            title: 'Camera',
        },

    ]
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
                display: "flex",
                overflow: "hidden",
            }}
        >
            <Overlay />
            {images.map((image, index) => (
                <Box
                    key={index}
                    sx={{
                        flex: 1, // makes all boxes equal width
                        position: "relative", // required for Image fill
                    }}
                >
                    <Image
                        src={image.img}
                        alt={image.title}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </Box>
            ))}
        </Box>


        // <Box height="100vh" width="100%" >
        //     {/* <Overlay /> */}

        // </Box>
        // <Box
        //     sx={{
        //         position: "absolute",
        //         top: 0,
        //         right: 0,
        //         height: "100%",
        //         width: "100%",
        //         display: "flex",
        //         flexDirection: "column", // stack vertically
        //         alignItems: "flex-end", // align to right
        //         justifyContent: "space-between", // one at top, one at bottom
        //         gap: 2,
        //         zIndex: 0,
        //     }}
        // >
        //     {/* <Overlay /> */}
        //     {/* Top image */}
        //     <Box sx={{ flexGrow: 1 }} > {/* Spacer to push bottom image down */}
        //         <Box
        //             sx={{

        //                 position: "absolute",
        //                 top: 0,
        //                 right: "14rem",
        //                 height: "280px",
        //                 width: "50vw",
        //                 backgroundImage: "url(/gallery/gallery3.jpg)",
        //                 backgroundSize: "cover",
        //                 backgroundPosition: "center",
        //                 opacity: 0.3,
        //                 borderRadius: "0 0 50px 50px",
        //                 overflow: "hidden",
        //             }}
        //         />
        //     </Box>
        //     {/* <Box sx={{ flexGrow: 1 }} > Spacer to push bottom image down */}
        //     <Box
        //         sx={{

        //             position: "absolute",
        //             top: 0,
        //             right: "1rem",
        //             height: "280px",
        //             width: "190px",
        //             backgroundImage: "linear-gradient(to bottom right, #1a8ef4ff, #061024)",
        //             backgroundSize: "cover",
        //             backgroundPosition: "center",
        //             opacity: 0.3,
        //             borderRadius: "0 0 50px 50px",
        //             overflow: "hidden",
        //         }}
        //     />
        //     {/* </Box> */}

        //     <Box sx={{ flexGrow: 1 }} > {/* Spacer to push bottom image down */}
        //         <Box
        //             sx={{
        //                 height: "45vh",
        //                 width: "35vw",
        //                 position: "absolute",
        //                 bottom: "0rem",
        //                 right: 0,
        //                 backgroundImage: "url(/gallery/gallery4.jpg)",
        //                 backgroundSize: "cover",
        //                 backgroundPosition: "center",
        //                 opacity: 0.3,
        //                 borderRadius: "50px 0 0 50px",
        //                 overflow: "hidden",
        //             }}
        //         />
        //     </Box>
        //     <Box sx={{ flexGrow: 1 }} > {/* Spacer to push bottom image down */}
        //         <Box
        //             sx={{
        //                 height: "220px",
        //                 width: "200px",
        //                 position: "absolute",
        //                 bottom: 40,
        //                 right: "32rem",
        //                 backgroundImage: "linear-gradient(to bottom right, #130c29ff, #0d4870ff)",
        //                 backgroundSize: "cover",
        //                 backgroundPosition: "center",
        //                 opacity: 0.3,
        //                 borderRadius: "50px",
        //                 overflow: "hidden",
        //             }}
        //         />
        //     </Box>
        //     {/* <Box sx={{ flexGrow: 1 }} >
        //         <Box
        //             sx={{
        //                 height: "220px",
        //                 width: "240px",
        //                 position: "absolute",
        //                 bottom: 0,
        //                 right: "16rem",
        //                 backgroundImage: "url(/gallery/gallery5.jpg)",
        //                 backgroundSize: "cover",
        //                 backgroundPosition: "center",
        //                 opacity: 0.3,
        //                 borderRadius: "50px 50px 0 0",
        //                 overflow: "hidden",
        //             }}
        //         />
        //     </Box> */}
        // </Box>

    )
}

export default HeroBackground