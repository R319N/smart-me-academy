import Curriculum from '@/components/curriculum-components/Curriculum'
import { styles } from '@/styles/styles'
import { Box, Container } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion";
import { staggerContainer } from '@/utils/motion';

const CurriculumSection = () => {
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                flexDirection: "column",
                backgroundSize: "cover"
            }}
            id="curriculum"
        >
            <Container sx={{
                ...styles.container
            }}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    style={{ margin: "auto", flexDirection: "column" }}
                >
                    <Curriculum />
                </motion.div>
            </Container>
        </section>
    )
}

export default CurriculumSection