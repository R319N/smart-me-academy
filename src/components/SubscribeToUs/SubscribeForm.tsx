import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react'
import Stack from '@mui/material/Stack';
import GlowingButton from '../glowingButton';
const SubscribeForm = () => {
    return (
        <Stack gap={2}>
            <Typography variant="body1" textTransform="capitalize" gutterBottom>
            &quot;Subscribe to our newsletter for web design and development tips, industry insights, and updates on our services.&quot; </Typography>
            <TextField placeholder='Enter Your Email' variant="standard" fullWidth />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <GlowingButton
                    variant="contained"
                    type="submit"
                    sx={{ fontWeight: "lighter", width: "104px", align: "right" }}
                >
                    subscribe
                </GlowingButton>
            </Box>
        </Stack>
    )
}

export default SubscribeForm
