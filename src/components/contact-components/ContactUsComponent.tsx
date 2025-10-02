import React from 'react'
import Grid from "@mui/material/Grid";
import { styles } from "@/styles/styles";
// import HeadingText from '../headerBanner';
import Box from '@mui/material/Box';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import { Container, Divider } from '@mui/material';
import HeadingText from '../headerBanner';

const ContactUsComponent = () => {
  const headerText = "get in touch";
  const header = 'contact us';


  return (
    <Container
      sx={{
        ...styles.container,
      }}
    >
      <Box sx={{ my: "3rem" }}>
        <Box pb={5}>
          <HeadingText
            header={headerText}
            subHeader={header}
          />
        </Box>
        <Grid
          container
          sx={{
            // ...styles.borderRadius,
            overflow: "hidden",

          }}
          spacing={4}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <ContactDetails />
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              ...styles.glassOutlined,
              width: "100%",
            }}
          >
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </Container>
  )
}

export default ContactUsComponent
