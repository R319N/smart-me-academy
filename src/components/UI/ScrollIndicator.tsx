'use client';

import { PlayForWork } from '@mui/icons-material';
import { Box } from '@mui/material';

const ScrollIndicator = () => {
  return (
    <Box
      sx={{
        // position: 'absolute',
        // bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite',
        '@keyframes bounce': {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, -10px)' },
        },
      }}
    >
      <Box
        sx={{
          width: 24,
          height: 40,
          border: (theme) => `1.5px solid ${theme.palette.text.secondary}`,
          borderRadius: '9999px',
          display: 'flex', 
          justifyContent: 'center',
          alignItems:"end"
        }}
      >
        <PlayForWork sx={{ color: (theme) => theme.palette.text.secondary }} />
        <Box
          sx={{
            width: 4,
            height: 12,
            bgcolor: 'white',
            borderRadius: '9999px',
            // mt: '0.5rem',
          }}
        />
      </Box>
    </Box>
  );
};

export default ScrollIndicator;
