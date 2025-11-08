import Documents from '@/components/informative-section-components/Documents'
import { styles } from '@/styles/styles'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const InformativeSection = () => {
  return (
    <section style={{
      position: "relative",
      width: "100%",
      height: "100%",
      flexDirection: "column",
      backgroundImage: "linear-gradient(180deg, #010b13 5%, #121d3bff 100%)",
    }}
      id="documents"
    >
      {/* <div className="gradient-01" /> */}
      <Box >
        <Typography>
          download enrolment form
          <Link href="">
            download
          </Link>
        </Typography>

        {/* <Documents /> */}
      </Box>
    </section>
  )
}

export default InformativeSection