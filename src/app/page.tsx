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
import ContactIcon from "@/components/UI/ContactIcon";
import ServerLayout from "./serverLayout";
import { Box } from "@mui/material";


export default function Home() {
  return (
    <ServerLayout>
      <RootLayout>
        <Paper
          sx={{
            minHeight: "100vh",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            borderRadius: "0",
            margin: 0,
            bgcolor: "#E6E4CE",
          }}
        >
          <NavigationBar />
          <HeroSection />
          <div className="gradient-03" />
          <CurriculumSection />
          {/* <Box sx={{
            position: "relative",
          }}> */}

          <div className="gradient-04" />
          <OurProgramsSection />
          {/* </Box> */}
          {/* <AboutUsSection /> */}
          <Testimonials />
          <InformativeSection />
          <ContactUs />
          <Footer />
          <ContactIcon />
          {/* <PromoPopup /> */}
        </Paper>
      </RootLayout>
    </ServerLayout>
  );
}    
