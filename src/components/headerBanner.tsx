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
    <Box my="2rem" sx={{ width: { xs: "80%", xl: "40%" } }} >
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <Typography
          variant="h4"
          textTransform="capitalize"
          sx={{
            fontWeight: "Regular",
            fontSize: isSmallScreen
              ? theme.typography.pxToRem(20)
              : theme.typography.pxToRem(38),
          }}
        >
          {header}
        </Typography>
        <div
          style={{
            height: "5px",
            opacity: 0.5,
            backgroundImage: `linear-gradient( to bottom left,rgba(140, 2, 231, 0.8),rgba(0, 185, 209, 0.93))`,
            margin: "4px 0",
            backdropFilter: "blur(20px)"
          }}
        />
        <Typography
          variant="body2"
          sx={{
            fontWeight: theme.typography.fontWeightLight,

            fontSize:{xs:"14px", xl:"16px"},
            textTransform: "capitalize",
            color: theme.palette.text.secondary,
          }}
        >
          {subHeader}
        </Typography>
      </motion.div>
    </Box >

    //   <Box
    //     my="1.5rem"
    //     px="1rem"
    //     gap={2}
    //     sx={{ ...styles.center_flex, flexDirection: "column" }}
    //   >
    //     <span

    //       className="blanka-font"
    //       style={{
    //         background: "linear-gradient(360deg, #449DD1 0%, #DEC5E3 100%)",
    //         WebkitBackgroundClip: "text",
    //         WebkitTextFillColor: "transparent",
    //         backgroundClip: "text",
    //         // textFillColor: "transparent",
    //         fontSize: isSmallScreen
    //           ? theme.typography.pxToRem(20)
    //           : theme.typography.pxToRem(22),
    //         whiteSpace: "pre-line",
    //         fontWeight: "bold",
    //         textTransform: "uppercase",
    //         textAlign: "center",
    //         letterSpacing: 2,
    //         lineHeight: 1.2,
    //       }}
    //     >
    //       {header}
    //     </span>
    //     {/* <Box sx={{ textAlign: "center",}}> */}
    //     <Typography
    //       variant="subtitle2"
    //       align="center"
    //       sx={{
    //         fontWeight: theme.typography.fontWeightRegular,
    //         width: { xs: "100%", md: "80%" },
    //         fontSize: isSmallScreen
    //           ? theme.typography.pxToRem(14)
    //           : theme.typography.pxToRem(16),
    //         textTransform: "capitalize",
    //         textAlign: "center",
    //         color: theme.palette.text.secondary,
    //         px: { xs: "1rem", lg: "12vw" }
    //       }}
    //     >
    //       {subHeader}
    //     </Typography>
    //     {/* </Box> */}
    //   </Box>
  );
};

export default HeadingText;
