import Mail from '@mui/icons-material/Mail'
import React from 'react'
import RotatingCard from '../RotatingCard/RotatingCard'
import IconButton from '@mui/material/IconButton';

interface EmailProps {
  emailAddress: string
}
const EmailButton: React.FC<EmailProps> = ({ emailAddress }) => {
  return (
    <RotatingCard href={`mailto:${emailAddress}`}>
      <Mail sx={{ fontSize: '18px', color: 'red' }} />
    </RotatingCard>
  )
}

export default EmailButton
