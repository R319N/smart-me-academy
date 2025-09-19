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
        variant="h4"
        textTransform="capitalize"
        sx={{
          fontWeight: "bold",
          fontSize: isSmallScreen
            ? theme.typography.pxToRem(20)
            : theme.typography.pxToRem(46),
        }}
      >
        {header}
      </Typography>
      <Typography
        variant="body2"
        color='primary'
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
