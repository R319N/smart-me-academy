'use client'
import React from "react";
import { styles } from "@/styles/styles";
import Box from '@mui/material/Box';
import OurTestimonialsComponent from "@/components/testimonials/OurTestimonialsComponent";
import { Container } from "@mui/material";

const Testimonials = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        flexDirection: "column",
        // backgroundColor:"#010b13",
        backgroundImage: `linear-gradient(to bottom, #E6e4ce 10%, #121d3bff 100%)`,
      }}
      id="testimonials"
    >
      <Box sx={{ ...styles.container }}>
        <OurTestimonialsComponent />
      </Box>
    </section>
  );
};

export default Testimonials;
