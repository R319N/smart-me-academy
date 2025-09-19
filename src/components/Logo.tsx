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
                    height: "2.4rem", width: "2.4rem", overflow: "hidden",borderRadius: "50px",
                }}
            >
                <Image
                    src="/logo1.jpg"
                    alt="logo"
                    width={80}
                    height={80}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    priority
                    // fill
                />
            </Box>
        </motion.div>
    )
}

export default Logo