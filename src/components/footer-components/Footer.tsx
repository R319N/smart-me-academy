import React from "react";

// *** MUI5 imports ***
import Box from "@mui/material/Box";
import Image from "next/image";
import EnrollSection from "@/sections/EnrollSection";
import FooterComponent from "./FooterComponent";
// import { styled } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100%",
        paddingTop: "0vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        position: "relative",
      }}
      gap={4}
    >
      {/* <Overlay /> */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: { xs: "90%", md: "75%" },
          background: "#010203fa",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: { xs: "80%", lg: "75%" },
          zIndex: 0,
        }}
      >
        <Image
          src="/footer-bg.jpg"
          alt="footer image"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </Box>
      <Box sx={{ zIndex: 2, px: { xs: 2, sm: 4, md: "16rem" } }}>
        <EnrollSection />
      </Box>
      <Box sx={{ zIndex: 2 }}>
        <FooterComponent />
      </Box>
    </Box>

  );
};
{/* <Divider />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Logo />
            {/* <Typography
              variant="body1"
              sx={{
                textTransform: "uppercase",
                display: "flex",
                justifySelf: "center",
                color: (theme) => theme.palette.primary.main,
              }}
            >
              wilfred&nbsp;
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textTransform: "uppercase",
                display: "flex",
                justifySelf: "center",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              reign
            </Typography>  </Box>


<Box
            display="flex"
            justifyContent="left"
            alignItems="left"
            flexWrap="wrap"
            fontSize="small"
            px={1.5}
          >
            <SocialContacts />
          </Box> */}
{/* </Box>
        <Typography
          variant="body2"
          fontSize="small"
          fontWeight="light"
          padding="0 1rem"
        >
          Copyright © 2023 - 2024 Genexx. All rights reserved.
        </Typography>
      </Box> */}



export default Footer;
