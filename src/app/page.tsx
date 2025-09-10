"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Paper from "@mui/material/Paper";
import RootLayout from "./layout";
import HeroSection from "@/sections/HeroSection";
import OurWork from "@/sections/OurWork";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import AboutUs from "@/sections/AboutUs";
import Testimonials from "@/sections/Testimonials";
import NavigationBar from "@/components/navigation-components/NavigationBar";
import EnrollSection from "@/sections/EnrollSection";

export default function Home() {
  return (
    // <ServerLayout>
    <RootLayout>
      <Paper
        sx={{
          minHeight: "100vh",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          borderRadius: "0",
          margin: 0,
          bgcolor: "#040C10",
          // backgroundImage: `linear-gradient( to bottom left,rgba(95, 171, 233, 1),rgba(25, 1, 67, 1))`,
        }}
      >
        <NavigationBar />
        <HeroSection />
        <AboutUs />
        <OurWork />
        <Testimonials />
        <ContactUs />
        <EnrollSection />
        <Footer />
      </Paper>
    </RootLayout>
    // </ServerLayout>
  );
}
