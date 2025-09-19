import OurPrograms from '@/components/programs-components/OurPrograms'
import { Box } from '@mui/material'
import React from 'react'

const OurProgramsSection = () => {
  return (
     <section
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
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
                <OurPrograms/>
            </Box>
        </section>
  )
}

export default OurProgramsSection