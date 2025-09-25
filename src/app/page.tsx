"use client";
import Paper from "@mui/material/Paper";
import RootLayout from "./layout";
import HeroSection from "@/sections/HeroSection";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import AboutUsSection from "@/sections/AboutUsSection";
import Testimonials from "@/sections/Testimonials";
import NavigationBar from "@/components/navigation-components/NavigationBar";
import InformativeSection from "@/sections/InformativeSection";
import CurriculumSection from "@/sections/CurriculumSection";
import OurProgramsSection from "@/sections/OurProgramsSection";
import PromoPopup from "@/components/Pop-Up-Promo";


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
          bgcolor: "#000A14",
          // backgroundImage: `linear-gradient( to bottom left,rgba(95, 171, 233, 1),rgba(25, 1, 67, 1))`,
        }}
      >
        <NavigationBar />
        <HeroSection />
        <CurriculumSection />
        <OurProgramsSection />
        <AboutUsSection />
        <Testimonials />
        <InformativeSection />
        <ContactUs />
        <Footer />
        <PromoPopup />
      </Paper>
    </RootLayout>
    // </ServerLayout>
  );
}
