'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import ContactUsComponent from '@/components/contact-components/ContactUsComponent'
import { Container, Paper } from '@mui/material'
import { styles } from '@/styles/styles'

const ContactUs = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundImage: `linear-gradient(to bottom, #121d3bff 10%, #010b13  100%)`,
      }}
      id="contact_us"
    >
      {/* <div className="gradient-04" /> */}
      <Container sx={{
        ...styles.container,
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        py:"4rem"
      }}>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
        >
          <ContactUsComponent />
        </motion.div>
      </Container>
    </section>
  )
}

export default ContactUs
