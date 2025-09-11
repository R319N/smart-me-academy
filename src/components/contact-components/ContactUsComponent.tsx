import React from 'react'
import Grid from "@mui/material/Grid";
import { styles } from "@/styles/styles";
// import HeadingText from '../headerBanner';
import Box from '@mui/material/Box';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import { Container } from '@mui/material';
import HeadingText from '../headerBanner';

const ContactUsComponent = () => {
  const headerText = "contact me";
  // const header = <TitleText title={headerText} />;

  return (
    <Container
      sx={{
        ...styles.container,
        // flexDirection: "column",
        // width: "100%",
        // pt: "5rem",
        // margin: "0 auto", // Center the component horizontally
        // px: {
        //   xs: "1rem", // padding for extra small screens
        //   sm: "2rem", // padding for small screens
        //   md: "3rem", // padding for medium screens
        //   lg: "4rem", // padding for large screens
        //   xl: "5rem", // padding for extra large screens
        // },
      }}
    >
      <HeadingText header={headerText} subHeader='get in touch with me, let&apos;s create awesome stuff' />
      <Box sx={{ ...styles.center_flex }}>
        <Grid
          container
          sx={{
            ...styles.borderRadius,
            overflow: "hidden",

          }}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <ContactDetails />
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              ...styles.cardStyle,
              borderRadius: "0",
              ...styles.center_flex,
              width: "100%",
              // px: {
              //   xs: "1rem", // padding for extra small screens
              //   sm: "2rem", // padding for small screens
              //   md: "3rem", // padding for medium screens
              //   lg: "4rem", // padding for large screens
              //   xl: "5rem", // padding for extra large screens
              // },
            }}
          >
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ContactUsComponent
