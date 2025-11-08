"use client"
import React from 'react'
import RootLayout from '../layout'
import { Paper } from '@mui/material'
import NavigationBar from '@/components/navigation-components/NavigationBar'
import ServerLayout from '../serverLayout'
import Footer from '@/components/footer-components/Footer'
import EnrollmentPage from '@/components/enrollment-form-components/EnrollmentPage'

const RegisterWithUs = () => {
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
                        // bgcolor: "#3a4254ff",
                        backgroundImage: `linear-gradient( to bottom,#3a4254ff,rgba(8, 12, 40, 1))`,
                    }}
                >
                    <NavigationBar />
                    <EnrollmentPage />
                    <Footer />
                </Paper>
            </RootLayout>
        </ServerLayout>
    )

}

export default RegisterWithUs