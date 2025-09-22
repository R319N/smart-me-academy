'use client'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'

const GlowingButtonOutlined = styled(Button)`
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => `${theme.spacing(1.25)} ${theme.spacing(2)}`};
  border: 1px solid ${({ theme }) => alpha(theme.palette.text.primary, 0.3)};
  backdrop-filter: blur(7px);
  transition: all 1s ease;

  &:hover {
    box-shadow: 0 0 5px ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.text.primary}; 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px ${({ theme }) => theme.palette.secondary.main};
  }

  & .material-icon,
  & .material-icons-round,
  & svg {
    font-size: ${({ theme }) => theme.spacing(2)};
  }
`

export default GlowingButtonOutlined
