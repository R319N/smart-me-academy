"use client";

import { Paper } from "@mui/material";
import NavigationBar from "@/components/navigation-components/NavigationBar";
import EnrollmentPage from "@/components/enrollment-form-components/EnrollmentPage";
import Footer from "@/components/footer-components/Footer";
import { Suspense } from "react";

export default function RegisterWithUs() {
  return (
    <Paper
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "#0C81D4", 
        backgroundImage:"linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)", 
       
          backgroundRepeat: "no-repeat",
      }}
    >
      <NavigationBar />

      {/* ✅ Suspense wrapper required because EnrollmentPage uses useSearchParams */}
      <Suspense fallback={<div />}>
        <EnrollmentPage />
      </Suspense>

      <Footer />
    </Paper>
  );
}
