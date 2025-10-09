'use client';
import pxToRem from '@/utils/darkTheme/functions/pxToRem';
import { Box, Divider, Typography } from '@mui/material';

interface HeaderBannerProps {
  title: string;
  subTitle?: string;
}

const TitleText1: React.FC<HeaderBannerProps> = ({ title, subTitle }) => {
  const words = title.trim().split(' ');
  const firstWord = words[0];
  const remaining = words.slice(1).join(' ');

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: pxToRem(32), lg: pxToRem(32) },
            textTransform: 'uppercase',
            fontWeight: 'bold',
            lineHeight: 1.4,
          }}
        >
          <Box component="span" sx={{ color: (theme) => theme.palette.text.primary }}>
            {firstWord}
          </Box>{' '}
          <Box component="span" sx={{ color: (theme) => theme.palette.primary.main }}>
            {remaining}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default TitleText1;
