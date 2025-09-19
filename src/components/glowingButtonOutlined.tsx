'use client'
import { styled } from '@mui/material'
import Button from '@mui/material/Button'

const GlowingButtonOutlined = styled(Button)`
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => `${theme.spacing(1.25)} ${theme.spacing(2)}`};
  backdrop-filter:blur(7px);
  font-size: '8px';
  // size: 'small';
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.palette.secondary.main};
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
