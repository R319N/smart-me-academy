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
        backgroundImage:
"radial-gradient(circle, rgba(12, 129, 212, 1) 0%, rgba(1, 11, 19, 1) 100%)", 
       
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
