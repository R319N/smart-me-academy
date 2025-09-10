import React from 'react';
import { Box, Typography, TextField, Button, Paper,} from '@mui/material';
import Grid from '@mui/material/Grid'

const EnrollSection: React.FC = () => {
    return (
        <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 6 }}>
            <Typography variant="h4" gutterBottom>
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
            </Box>
        </Paper>
    );
};

export default EnrollSection;