import React from "react";

// *** MUI5 imports ***
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import SocialContacts from "../contact-components/socialContact";

import { Container } from "@mui/material";
import { styles } from "@/styles/styles";
import Logo from "../Logo";

const Footer = () => {
  return (
    <Container
      sx={{ ...styles.container }}
    >
      <Divider />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Logo />
            {/* <Typography
              variant="body1"
              sx={{
                textTransform: "uppercase",
                display: "flex",
                justifySelf: "center",
                color: (theme) => theme.palette.primary.main,
              }}
            >
              wilfred&nbsp;
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textTransform: "uppercase",
                display: "flex",
                justifySelf: "center",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              reign
            </Typography> */}
          </Box>

          {/* <Box
            display="flex"
            justifyContent="left"
            alignItems="left"
            flexWrap="wrap"
            fontSize="small"
            px={1.5}
          >
            <SocialContacts />
          </Box> */}
        </Box>
        <Typography
          variant="body2"
          fontSize="small"
          fontWeight="light"
          padding="0 1rem"
        >
          Copyright © 2023 - 2024 Genexx. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
