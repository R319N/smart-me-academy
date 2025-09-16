
import Documents from '@/components/informative-section-components/Documents'
import { styles } from '@/styles/styles'
import { Box } from '@mui/material'
import React from 'react'

const InformativeSection = () => {
  return (
    <section style={{
      position: "relative",
      ...styles.center_flex,
      width: "100%",
      flexDirection: "column",
    }}
      id="informative"
    >
      <Box sx={{ ...styles.center_flex }}>
        <Documents />
      </Box>
    </section>
  )
}

export default InformativeSection