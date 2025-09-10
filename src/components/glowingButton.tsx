'use client'
import { styled } from '@mui/material'
import Button from '@mui/material/Button'

const GlowingButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.primary.main};
  min-height: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => `${theme.spacing(1.25)} ${theme.spacing(2)}`};
  font-size: '10px';
  size: 'small';
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.dark};
    box-shadow: 0 0 10px ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  &:focus {
    outline: none;
     color: ${({ theme }) => theme.palette.text.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.palette.secondary.main};
  }

  & .material-icon,
  & .material-icons-round,
  & svg {
    font-size: ${({ theme }) => theme.spacing(2)};
  }
`
export default GlowingButton  
