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
        backgroundImage: `linear-gradient(to bottom, #0343c275 30%, transparent  100%)`,
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
