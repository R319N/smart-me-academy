// "use client";
// // import { styles } from "@/styles/styles";
// import { useTheme } from '@mui/material';
// import useMediaQuery from '@mui/material/useMediaQuery';
// // *** react/next imports ***
// import React, { ReactElement } from "react";

// // *** MUI5 Component imports ***
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// // import CardHeader from "@mui/material/CardHeader";
// // import Divider from "@mui/material/Divider";

// // *** motion imports ***
// import { motion } from "framer-motion";
// import { slideIn } from "@/utils/motion";

// interface HeaderBannerProps {
//   header: string | ReactElement;
//   subHeader?: string;
// }
// const HeadingText: React.FC<HeaderBannerProps> = ({ header, subHeader }) => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
//   return (
//     <Box py={"2rem"} >
//       <Typography
//         textTransform="capitalize"
//         color='textSecondary'
//         sx={{
//           fontWeight: "bold",
//           fontSize: { xs: "28px", md: "42px" }
//         }}
//       >
//         {header}
//       </Typography>
//       <Typography
//         variant="body2"
//         // color='secondary'
//         sx={{
//           fontWeight: theme.typography.fontWeightRegular,
//           fontSize: { xs: "14px", xl: "16px" },
//           textTransform: "capitalize",
//           color: theme.palette.primary.light,
//         }}
//       >
//         |&nbsp;{subHeader}
//       </Typography>
//     </Box >

//   );
// };

// export default HeadingText;
'use client';

import pxToRem from '@/utils/darkTheme/functions/pxToRem';
// import pxToRem from '@/theme/typography/pxToRem';
import { Box, Divider, Typography } from '@mui/material';
import { Caveat_Brush, Island_Moments } from 'next/font/google';

interface HeaderBannerProps {
  header: string;
  subHeader?: string;
}

const caveatBrush = Caveat_Brush({
  weight: '400',
  subsets: ['latin'],
});

const HeaderText: React.FC<HeaderBannerProps> = ({ header, subHeader }) => {
  const words = header.trim().split(' ');
  const firstWord = words[0];
  const remaining = words.slice(1).join(' ');

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box
        // my="1.5rem"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={1}
      >
        <Typography
          variant="h2"
          className={caveatBrush.className}
          sx={{
            ...caveatBrush.style,
            fontSize: { xs: pxToRem(38), lg: pxToRem(64) },
            textTransform: 'uppercase',
            // letterSpacing: 2,
            fontWeight: 'bold',
            lineHeight: 1,
          }}
        >
          <Box component="span" sx={{ color: (theme)=> theme.palette.text.primary }}>
            {firstWord}
          </Box>{' '}
          <Box component="span" sx={{ color: (theme)=> theme.palette.primary.main }}>
            {remaining}
          </Box>
        </Typography>
        <Box width={"100%"}>
          <Divider />
        </Box>


        {subHeader && (
          <Typography
            variant="body2"
            sx={{
              whiteSpace: 'pre-line',
              fontSize: { xs: pxToRem(14), lg: pxToRem(12) },
              textTransform: 'capitalize',
              maxWidth: '600px',
              color: 'text.secondary',
            }}
          >
            {subHeader}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default HeaderText;
