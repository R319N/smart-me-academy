'use client'
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import Hero from "@/components/hero-section-components/Hero";

const HeroSection = () => {
  return (
   <section style={{ position: "relative", zIndex: 10 }} id="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        style={{ margin: "auto", flexDirection: "column" }}
      >
        <Hero />
      </motion.div>
    </section>
  )
}

export default HeroSection