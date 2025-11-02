import { alpha, IconButton, styled } from "@mui/material";

const GlowingIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(1)}`};
  border: 1px solid ${({ theme }) => alpha(theme.palette.text.secondary, 0.3)};
  // backdrop-filter: blur(5px);
  transition: all 1s ease;

  &:hover {
    box-shadow: 0 0 5px ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.text.primary};
      backdrop-filter: blur(10px);
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
export default GlowingIconButton