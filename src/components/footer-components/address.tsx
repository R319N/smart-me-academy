'use client'
import React from "react";

// *** MUI5 imports ***
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocationCity from "@mui/icons-material/LocationCity";

// *** MY COMPONENTS ***
import PhoneCallButton from "../contact-components/phoneButton";
import EmailButton from "../contact-components/emailButton";
import RotatingCard from "../RotatingCard/RotatingCard";



const Address = () => {
  return (
    <Box
      sx={{
        display: { sm: "flex-column" },
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{ align: "left" }}>
        <Stack mb="1rem" width="fit-content">
          <Typography
            variant="subtitle1"
            textTransform="capitalize"
            fontWeight={(theme) => theme.typography.fontWeightRegular}
            color='#5C6584'
          >
            contact us
          </Typography>
        </Stack>

        <Stack gap={1} sx={{ px: "0.5rem" }}>
          <Box display="flex" alignItems="center">
            <RotatingCard>
              <LocationCity sx={{ fontSize: "18px" }} />
            </RotatingCard>
            <Typography
              variant="button"
              textTransform="capitalize"
              px="1rem"
              sx={{
                color: "textPrimary",
                cursor: "pointer",
                "&:hover": { color: (theme) => theme.palette.primary.main },
              }}
            >
              johanesburg
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneCallButton phoneNumber="27612023165" />
            <Typography
              variant="button"
              px="1rem"
              sx={{
                color: "textPrimary",
                cursor: "pointer",
                "&:hover": { color: (theme) => theme.palette.primary.main },
              }}
            >
              +27612023165
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <EmailButton emailAddress="wilfredr319n@gmail.com" />
            <Typography
              variant="body2"
              textAlign="left"
              textTransform="lowercase"
              px="1rem"
              sx={{
                color: "textPrimary",
                cursor: "pointer",
                "&:hover": { color: (theme) => theme.palette.primary.main },
              }}
            >
              wilfredr319n@gmail.com
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Address;
