'use client';
import React from 'react'
import pxToRem from '@/utils/darkTheme/functions/pxToRem';
import { Box, Divider, Typography } from '@mui/material';
import { ExoFontWrapper } from '@/layouts/wrappers/PoppinsWrapper';
import { grey } from '@mui/material/colors';

interface HeaderBannerProps {
    title: string;
    subTitle?: string;
}


const Heading6: React.FC<HeaderBannerProps> = ({ title, subTitle }) => {

    const words = title.trim().split(' ');
    const firstWord = words[0];
    const remaining = words.slice(1).join(' ');

    return (
        <Box
            sx={{
                display: 'flex',
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                gap={1}
            >
                <ExoFontWrapper>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: pxToRem(24), lg: pxToRem(32) },
                            textTransform: 'uppercase',
                            fontWeight: 'medium',
                            lineHeight: 1,
                        }}
                    >
                        <Box component="span" sx={{ color: (theme) => theme.palette.primary.main }}>
                            {firstWord}
                        </Box>{' '}
                        <Box component="span" sx={{ color: (theme) => theme.palette.text.secondary }}>
                            {remaining}
                        </Box>
                    </Typography>
                </ExoFontWrapper>
                {/* <Box width={"100%"}>
                    <Divider />
                </Box> */}


                {subTitle && (
                    <Typography
                        variant="body2"
                        sx={{
                            whiteSpace: 'pre-line',
                            // fontSize: { xs: pxToRem(12), lg: pxToRem(12) },
                            textTransform: 'capitalize',
                            maxWidth: '600px',
                            // color: grey[400],
                            fontWeight: "regular"
                        }}
                    >
                        {subTitle}
                    </Typography>
                )}
            </Box>
        </Box>
    )
}

export default Heading6
