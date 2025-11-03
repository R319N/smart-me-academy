import React from 'react'
import { motion } from "framer-motion";
import { footerVariants, staggerContainer } from '@/utils/motion'
import Footer from '@/components/footer-components/Footer';

const FooterSection = () => {
    return (
        <motion.footer
            style={{
                position: 'relative',
            }}
            variants={footerVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
        >
            {/* <div className="footer-gradient" /> */}
            <Footer />
        </motion.footer>
    )
}

export default FooterSection
