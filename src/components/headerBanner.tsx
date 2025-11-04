'use client';
import EduSaHandFontWrapper from '@/layouts/wrappers/EduSAHandWrapper';
import pxToRem from '@/utils/darkTheme/functions/pxToRem';
import { Box, Divider, Typography } from '@mui/material';
import { Caveat_Brush, Exo } from 'next/font/google';

interface HeaderBannerProps {
  header: string;
  subHeader?: string;
  color1?: string;
  subHeaderColor?: string;
}

const caveatBrush = Exo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',

});
// const eduSAHand = Edu_SA_Hand({
//   weight: '400',
//   subsets: ['latin'],
//     display: 'swap',
//     // fallback:'roboto',
// });

const HeaderText: React.FC<HeaderBannerProps> = ({ header, subHeader, color1, subHeaderColor }) => {
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
            fontSize: { xs: pxToRem(38), lg: pxToRem(42) },
            textTransform: 'uppercase',
            // letterSpacing: 2,
            fontWeight: 'bold',
            lineHeight: 1,
          }}
        >
          <Box component="span" sx={{ color: `${color1}` }}>
            {firstWord}
          </Box>{' '}
          <Box component="span" sx={{ color: (theme) => theme.palette.primary.main }}>
            {remaining}
          </Box>
        </Typography>
        <Box width={"100%"}>
          <Divider />
        </Box>


        {subHeader && (
          <EduSaHandFontWrapper>
            <Typography
              variant="body2"
              // className={eduSAHand.className}
              sx={{
                // ...eduSAHand.style,
                whiteSpace: 'pre-line',
                fontSize: { xs: pxToRem(14), lg: pxToRem(12) },
                textTransform: 'capitalize',
                maxWidth: '600px',
                color: `${subHeaderColor}`,
                fontWeight: 'bold',
              }}
            >
              {subHeader}
            </Typography>
          </EduSaHandFontWrapper>
        )}
      </Box>
    </Box>
  );
};

export default HeaderText;
