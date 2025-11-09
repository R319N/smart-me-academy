'use client';
import { ExoFontWrapper } from '@/layouts/wrappers/PoppinsWrapper';
import { styles } from '@/styles/styles';
import pxToRem from '@/utils/darkTheme/functions/pxToRem';
import { Box, Divider, Typography } from '@mui/material';

interface HeaderBannerProps {
    title: string;
    subTitle?: string;
}

const Heading2: React.FC<HeaderBannerProps> = ({ title, subTitle }) => {
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
                sx={{
                ...styles.center_flex
                }}
                gap={1}
            >
                <ExoFontWrapper>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: pxToRem(22), lg: pxToRem(32) },
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            lineHeight: 1,
                        }}
                    >
                        <Box component="span" sx={{ color: (theme) => theme.palette.text.secondary }}>
                            {firstWord}
                        </Box>&nbsp;&nbsp;
                        <Box component="span" sx={{ color: (theme) => theme.palette.primary.main }}>
                            {remaining}
                        </Box>
                    </Typography>
                </ExoFontWrapper>
                <Box width={"100%"}>
                    <Divider />
                </Box>


                {subTitle && (
                    <Typography
                        variant="body2"
                        sx={{
                            whiteSpace: 'pre-line',
                            fontSize: { xs: pxToRem(14), lg: pxToRem(12) },
                            textTransform: 'capitalize',
                            maxWidth: '400px',
                            textAlign:"center",
                            color: 'text.secondary',
                        }}
                    >
                        {subTitle}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default Heading2;
