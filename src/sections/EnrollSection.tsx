import React from 'react';
import { Box, Typography, TextField, Stack, } from '@mui/material';
import Grid from '@mui/material/Grid'
import { styles } from '@/styles/styles';
import GlowingButton from '@/components/glowingButton';

const EnrollSection: React.FC = () => {
    return (
        <Box sx={{
            ...styles.glassOutlined,
            // p: 4,
            width: "100%",
            // mx: '1rem',
            //  mt: 6,
            height: "225px",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
        }}>
            <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
                {/* <Box
                    sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
                >
                    <Box>
                        statement
                    </Box>
                    <Box>
                        form
                    </Box>
                </Box> */}
                <Grid container spacing={2}
                    sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        statement
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Stack gap={2} px="2rem" py="1rem">
                            <Typography variant='body2'>
                                * please provide us with your Whatsapp number or email adress to start enrolling.
                            </Typography>
                            <TextField
                                label="Enter Your Email or Whatsapp Number"
                                name="firstName"
                                variant='standard'
                                fullWidth
                                required
                            />
                            <GlowingButton>
                                Start enrollment
                            </GlowingButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default EnrollSection;
{/* <Typography variant="h4" gutterBottom>
                School Enrollment
            </Typography>
            <Typography variant="body1" gutterBottom>
                Fill out the form below to enroll in our academy.
            </Typography>
            <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="First Name"
                            name="firstName"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Last Name"
                            name="lastName"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Grade Level"
                            name="grade"
                            fullWidth
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Enroll Now
                        </Button>
                    </Grid>
                </Grid>
            </Box> */}



