import React from 'react';
import { Box, Typography, TextField, Stack, Button, } from '@mui/material';
import Grid from '@mui/material/Grid'
import { styles } from '@/styles/styles';
import GlowingButton from '@/components/glowingButton';

const EnrollSection: React.FC = () => {
    return (
        <Box sx={{
            ...styles.glassOutlinedDark,
            background: "#010203b0",
            // p: 4,
            width: "100%",
            // mx: '1rem',
            //  mt: 6,
            minHeight: "225px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Typography>
                new enrollment R500
            </Typography>
            <Button>
                Enroll now
            </Button>
        </Box>
    )
}

export default EnrollSection;
