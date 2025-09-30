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
        ...styles.center_flex,
        width: "100%",
        flexDirection: "column",
      }}
      id="testimonials"
    >
      <Container sx={{ ...styles.container }}>
        <OurTestimonialsComponent />
      </Container>
    </section>
  );
};

export default Testimonials;
