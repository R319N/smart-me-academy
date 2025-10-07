'use client';
import pxToRem from '@/utils/darkTheme/functions/pxToRem';
import { Box, Divider, Typography } from '@mui/material';
import { Caveat_Brush, Edu_SA_Hand } from 'next/font/google';

interface HeaderBannerProps {
  header: string;
  subHeader?: string;
}

const caveatBrush = Caveat_Brush({
  weight: '400',
  subsets: ['latin'],
});
const eduSAHand = Edu_SA_Hand({
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
          <Box component="span" sx={{ color: (theme) => theme.palette.text.primary }}>
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
          <Typography
            variant="body2"
            className={eduSAHand.className}
            sx={{
              ...eduSAHand.style,
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
