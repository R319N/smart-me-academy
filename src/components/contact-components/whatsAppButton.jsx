import WhatsApp from "@mui/icons-material/WhatsApp";
import React from "react";
import RotatingCard from "../RotatingCard";
import { IconButton } from "@mui/material";

const WhatsAppButton = ({ phoneNumber, fontSize }) => {
  return (
    <RotatingCard>
      <IconButton
        variant="contained"
        href={`https://wa.me/${phoneNumber}?text=Hie%20blue%20boutique%20`}
        fontSize={fontSize}
      >
        <WhatsApp sx={{ fontSize: "20px", color: "green" }} />
      </IconButton>
    </RotatingCard>
  );
};
//

export default WhatsAppButton;
