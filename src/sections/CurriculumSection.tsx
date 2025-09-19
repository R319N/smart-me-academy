import Curriculum from '@/components/curriculum-components/Curriculum'
import { styles } from '@/styles/styles'
import { Box } from '@mui/material'
import React from 'react'

const CurriculumSection = () => {
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                flexDirection: "column",
            }}
            id="curriculum"
        >
            <Box sx={{
                background: `url(/bg.svg)`,
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                pt: "3rem"
            }}>
                <Curriculum />
            </Box>
        </section>
    )
}

export default CurriculumSection