import { Box } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Logo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Box
                sx={{
                    display: "flex",

                    alignItems: "center",
                    cursor: "pointer",
                }}
            >
                <Image
                    src="/logo1.jpg"
                    alt="logo"
                    width={80}
                    height={80}
                    style={{ borderRadius: "50px", height: "3rem", width: "3rem" }}
                    priority
                />
            </Box>
        </motion.div>
    )
}

export default Logo