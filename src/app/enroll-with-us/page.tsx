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
        backgroundImage:
          "linear-gradient(to bottom, rgba(22, 22, 23, 0.87),   rgba(8, 12, 40, 1))",
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
