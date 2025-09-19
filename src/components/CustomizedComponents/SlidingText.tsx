import { styles } from '@/styles/styles'
import { sliderVariantLeft } from '@/utils/motion'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

const SlidingText = () => {
    return (
        <motion.div
            variants={sliderVariantLeft}
            initial="initial"
            animate="animate"
        >
            <Box>
                <Typography
                    variant="h1"
                    color="primary"
                    sx={styles.slidingText}
                >
                    Mathematics
                </Typography>
            </Box>
        </motion.div>
    )
}

export default SlidingText