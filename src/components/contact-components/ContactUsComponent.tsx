import React from 'react'
import Grid from "@mui/material/Grid";
import { styles } from "@/styles/styles";
import Box from '@mui/material/Box';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import { Typography } from '@mui/material';
import HeadingText from '../headerBanner';
import Image from 'next/image';

const ContactUsComponent = () => {
  const headerText = "get in touch";
  const header = 'contact us';


  return (
    <Grid container spacing={6}>
      <Grid size={12}>
        <HeadingText
          header={headerText}
          subHeader={header}
        />
      </Grid>
      <Grid size={12}>
        <Box sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "flex-start" },

        }}
          gap={2}>
          <Box sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "center" },
          }}>
            <Image
              style={{

                borderRadius: "50px"
              }}
              width={100}
              height={100}
              alt="Responsive"
              src="/logo1.jpg"
            />
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Typography
              variant="body2"
              sx={{
                textTransform: "capitalize",
                color: "text.secondary",
                width: { xs: "100%", lg: "80%" },
                textAlign: "center",

              }}
            >
              Education is more than knowledge; it&apos;s the key to transformation. At Smart Me Academy,
              we believe that true training shapes not only minds but perspectives,
              fostering a deeper understanding of the world. Our programs empower students to
              develop critical skills and self-awareness,
              preparing them to make meaningful contributions to society.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid container size={12} spacing={6} sx={styles.center_flex}>
        <Grid size={{ xs: 12, sm: 7 }}>
          <ContactDetails />
        </Grid>
        <Grid size={{ xs: 12, sm: 5 }}
          sx={{
            ...styles.glassOutlined,
            width: "100%",
          }}
        >
          <ContactForm />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContactUsComponent
