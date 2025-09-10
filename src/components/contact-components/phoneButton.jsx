import Phone from '@mui/icons-material/Phone'
import React from 'react'
import RotatingCard from '../RotatingCard/RotatingCard'
import { IconButton } from '@mui/material'

const PhoneCallButton = ({ phoneNumber }) => {
  return (
    <RotatingCard href={`tel:${phoneNumber}`}>
      <Phone sx={{ fontSize: '18px', color: '#0044bb' }} />
    </RotatingCard>
  )
}

export default PhoneCallButton
