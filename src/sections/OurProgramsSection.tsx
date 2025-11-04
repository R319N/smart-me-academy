import OurPrograms from '@/components/programs-components/OurPrograms'
import { Box } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'

const OurProgramsSection = () => {
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                flexDirection: "column",
                backgroundSize: "cover",
                backgroundImage: "linear-gradient(180deg,#E6E4CE 10%, #101b13 100%)",

            }}
            id="programs"
        >
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                style={{ margin: "auto", flexDirection: "column" }}
            >
                <OurPrograms />
            </motion.div>
        </section>
    )
}

export default OurProgramsSection