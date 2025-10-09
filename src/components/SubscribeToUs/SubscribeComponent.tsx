import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import React from 'react'
import HeadingText from '../headerBanner';
import { TitleText } from '../CustomTexts';
import { styles } from '@/styles/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SubscribeForm from './SubscribeForm';
import pxToRem from '@/utils/darkTheme/functions/pxToRem';
import { Poppins } from 'next/font/google';
import Heading4 from '../UI/Heading4';
import Subtitle1 from '../UI/TitleText1';
import TitleText1 from '../UI/TitleText1';


const poppins = Poppins({
    subsets: ['latin'],
    weight: '300', // Set the font weight to the boldest available
});

const SubscribeComponent: React.FC = () => {
    return (
        <Box sx={{
            ...styles.glassOutlinedDark,
            background: "#010203b0",
            position: "relative",
            // p: 4,
            width: "100%",
            minHeight: "225px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: "2rem 1rem"
        }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }} sx={styles.center_flex} >
                    {/* <Typography
                        color="primary"
                        textTransform="uppercase"
                        whiteSpace="pre-line"
                        className={poppins.className}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        sx={{
                            ...poppins.style,
                            fontWeight: (theme) => theme.typography.fontWeightBold,
                            // fontFamily: poppins.style.fontFamily,
                            fontSize: {
                                xs: pxToRem(28),
                                md: pxToRem(24),
                                lg: pxToRem(32),
                            },
                            lineHeight: 1.2
                        }}
                    >
                        subscribe to our newsletter
                    </Typography> */}
                    <TitleText1 title='subscribe to our newsletter' />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <SubscribeForm />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SubscribeComponent;
