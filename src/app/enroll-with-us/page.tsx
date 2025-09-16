import React from 'react'
import RootLayout from '../layout'
import { Paper } from '@mui/material'
import EnrollmentPage from '@/components/enrollment-form-components/EnrollmentPage'
import NavigationBar from '@/components/navigation-components/NavigationBar'

const RegisterWithUs = () => {
    return (
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
                <EnrollmentPage />
            </Paper>
        </RootLayout>
    )

}

export default RegisterWithUs