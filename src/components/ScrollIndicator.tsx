'use client';

import { Box } from '@mui/material';

const ScrollIndicator = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '2rem',
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
          border: '2px solid white',
          borderRadius: '9999px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: 4,
            height: 12,
            bgcolor: 'white',
            borderRadius: '9999px',
            mt: '0.5rem',
          }}
        />
      </Box>
    </Box>
  );
};

export default ScrollIndicator;
