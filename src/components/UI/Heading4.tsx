'use client';
import pxToRem from '@/utils/darkTheme/functions/pxToRem';
import { Box, Divider, Typography } from '@mui/material';

interface HeaderBannerProps {
  title: string;
  subTitle?: string;
}

const Heading4: React.FC<HeaderBannerProps> = ({ title, subTitle }) => {
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
            fontSize: { xs: pxToRem(16), lg: pxToRem(32) },
            textTransform: 'uppercase',
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


        {subTitle && (
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
            {subTitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Heading4;
