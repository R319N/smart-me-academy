"use client";

import { Paper } from "@mui/material";
import NavigationBar from "@/components/navigation-components/NavigationBar";
import EnrollmentPage from "@/components/enrollment-form-components/EnrollmentPage";
import Footer from "@/components/footer-components/Footer";

export default function RegisterWithUs() {
    return (
        <Paper sx={{ minHeight: "100vh", width: "100%", backgroundImage: `linear-gradient(to bottom,#3a4254ff,rgba(8, 12, 40, 1))` }}>
            <NavigationBar />
            <EnrollmentPage />
            <Footer />
        </Paper>
    );
}
