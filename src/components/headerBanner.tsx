"use client";
// import { styles } from "@/styles/styles";
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
// *** react/next imports ***
import React, { ReactElement } from "react";

// *** MUI5 Component imports ***
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import CardHeader from "@mui/material/CardHeader";
// import Divider from "@mui/material/Divider";

// *** motion imports ***
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

interface HeaderBannerProps {
  header: string | ReactElement;
  subHeader?: string;
}
const HeadingText: React.FC<HeaderBannerProps> = ({ header, subHeader }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box>
      <Typography
        variant="h6"
        textTransform="capitalize"
        color='primary'
        sx={{
          fontWeight: "bold",
          fontSize: {xs:"28px"}
        }}
      >
        {header}
      </Typography>
      <Typography
        variant="body2"
        color='textSecondary'
        sx={{
          fontWeight: theme.typography.fontWeightRegular,
          fontSize: { xs: "14px", xl: "16px" },
          textTransform: "capitalize",
          // color: theme.palette.text.secondar,
        }}
      >
        {subHeader}
      </Typography>
    </Box >

  );
};

export default HeadingText;
