import AboutUs from '@/components/about-us-components/AboutUs'
import { Box, Paper } from '@mui/material'
import React from 'react'

const AboutUsSection = () => {
  return (
   <section
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                flexDirection: "column",
            }}
            id="about-us"
        >
            <Paper sx={{
                background: "#496A81",
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                // backgroundSize: "cover",
                py: "3rem"
            }}>
                <AboutUs/>
            </Paper>
        </section>
  )}

export default AboutUsSection