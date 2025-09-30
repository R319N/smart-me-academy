'use client'
import React from "react";

// *** MUI5 imports ***
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocationCity from "@mui/icons-material/LocationCity";

// *** MY COMPONENTS ***
import PhoneCallButton from "../contact-components/phoneButton";
import EmailButton from "../contact-components/emailButton";
import RotatingCard from "../RotatingCard/RotatingCard";
import { GpsFixed, LocationPin } from "@mui/icons-material";



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
        {/* */}

        <Stack gap={1} sx={{ px: "0.5rem" }}>
          <Box display="flex" alignItems="center">
            <RotatingCard>
              <LocationPin sx={{ fontSize: "18px" }} />
            </RotatingCard>
            <Typography
              variant="body1"
              textTransform="capitalize"
              px="1rem"
              sx={{
                color: "textPrimary",
                cursor: "pointer",
                "&:hover": { color: (theme) => theme.palette.primary.main },
              }}
            >
              84 Gourlay Street, Meyerton 1961
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneCallButton phoneNumber="27612023165" />
            <Typography
              variant="body1"
              px="1rem"
              sx={{
                color: "textPrimary",
                cursor: "pointer",
                "&:hover": { color: (theme) => theme.palette.primary.main },
              }}
            >
              +27 61 429 9295
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <EmailButton emailAddress="info@smartmeacademy.co.za" />
            <Typography
              variant="body1"
              textAlign="left"
              textTransform="lowercase"
              px="1rem"
              sx={{
                color: "textPrimary",
                cursor: "pointer",
                "&:hover": { color: (theme) => theme.palette.primary.main },
              }}
            >
              info@smartmeacademy.co.za
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Address;
