'use client'
import React from "react";
import { styles } from "@/styles/styles";
import Box from '@mui/material/Box';
import OurTestimonialsComponent from "@/components/testimonials/OurTestimonialsComponent";
import { Container, Stack, Typography } from "@mui/material";
import { ExoFontWrapper } from "@/layouts/wrappers/PoppinsWrapper";
import ScrollIndicator from "@/components/UI/ScrollIndicator";

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
        <Stack gap={2} py={"4rem"}>
          <ExoFontWrapper>
            <Typography variant='h4' textAlign="center" fontWeight={"bold"} color='text.primary'>
              have any questions?
            </Typography>

          </ExoFontWrapper>
          <Typography variant='body2' textAlign="center" color='text.secondary' sx={{ fontWeight: "fontWeightMedium" }}>
            contact us today to learn more about our programs and how we can help your child succeed.
          </Typography>
        </Stack>
        <Box sx={{ ...styles.center_flex, mb: "2rem" }}>
          <ScrollIndicator/>
        </Box>
      </Box>
    </section>
  );
};

export default Testimonials;
