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
  const header = 'If you\'d like to find out more, register your child, or re-enroll, kindly let us know';


  return (
    <Container
      sx={{
        ...styles.container,
      }}
    >
      <HeadingText header={headerText}
        subHeader={header} />
      <Box sx={{ ...styles.center_flex, my: "2rem" }}>
        <Grid
          container
          sx={{
            // ...styles.borderRadius,
            overflow: "hidden",

          }}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <ContactDetails />
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              // background: "#000a14cd",
              // borderRadius: "0",
              ...styles.glassOutlined,
              width: "100%",
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
