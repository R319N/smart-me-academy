'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import ContactUsComponent from '@/components/contact-components/ContactUsComponent'
// import ContactUsComponent from '@/components/contact/ContactUsComponent'

const ContactUs = () => {
  return (
    <section
      id="contact"
    >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <ContactUsComponent />
      </motion.div>
    </section>
  )
}

export default ContactUs
