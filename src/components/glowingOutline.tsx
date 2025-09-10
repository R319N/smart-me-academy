"use client";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const GlowingOutline = styled(Box)`
  color: ${({ theme }) => theme.palette.text.primary};
  min-height: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => `${theme.spacing(1.25)} ${theme.spacing(2)}`};
  box-shadow: 0 0 10px ${({ theme }) => theme.palette.secondary.light};
  backdrop-filter: blur(7px);
  font-size: "8px";
  // size: 'small';
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.palette.secondary.dark};
    color: ${({ theme }) => theme.palette.text.primary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px ${({ theme }) => theme.palette.secondary.dark};
  }

  & .material-icon,
  & .material-icons-round,
  & svg {
    font-size: ${({ theme }) => theme.spacing(2)};
  }
`;
export default GlowingOutline;
