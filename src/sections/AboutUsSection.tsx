import AboutUs from '@/components/about-us-components/AboutUs'
import { staggerContainer } from '@/utils/motion'
import { Box, Container, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

const AboutUsSection = () => {
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                flexDirection: "column",
                backgroundImage: `linear-gradient(to bottom, #010b13cc 30%, #0343c275 50%, #E6E4CE 100%)`,
            }}
            id="about-us"
        >
            {/* <div className="gradient-01" /> */}
            <Container sx={{
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                py:"4rem"
            }}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    style={{ margin: "auto", flexDirection: "column" }}
                >
                    <AboutUs />
                </motion.div>
            </Container>
        </section>
    )
}

export default AboutUsSection