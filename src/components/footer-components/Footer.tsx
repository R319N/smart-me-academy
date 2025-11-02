import React from "react";

// *** MUI5 imports ***
import Box from "@mui/material/Box";
import Image from "next/image";


import FooterComponent from "./FooterComponent";
import SubscribeComponent from "../SubscribeToUs/SubscribeComponent";

const Footer = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100%",
        marginTop: "10vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        position: "relative",
      }}
      gap={4}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: { xs: "90%", md: "75%" },
          background: "#010b13",
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
        <SubscribeComponent />
      </Box>
      <Box sx={{ zIndex: 2 }}>
        <FooterComponent />
      </Box>
    </Box>

  );
};

export default Footer;
