'use client'
import React from 'react'

// *** MUI5 imports ***
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const Subscriptions = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack my='1rem' width='fit-content'>
        <Typography
          display='block'
          variant='body2'
          textTransform='uppercase'
          fontWeight={theme => theme.typography.fontWeightRegular}
          width='fit-content'
        >
          Subscribe to our newsletter
        </Typography>
        <Divider color='white' />
      </Stack>

      <Box px='1rem'>
        <Stack spacing={3} width='100%'>
          <TextField placeholder='email@example.com' size='10' width='200px' fullWidth />
          <Button width='50vw' variant='contained'>
            Subscribe
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Subscriptions
