import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

import CreatorStamp from "./creatorStamp";

const FooterCopyright = () => {
  const endYear = 2026;
  const currentYear = new Date().getFullYear();
  
  return (
    <Box display={{ sm: "flex", m: "0rem" }} justifyContent="space-between">
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "right" },
          alignItems: "center",
          py: { md: "0.5rem" },
        }}
      >
        <Typography
          variant="caption"
          textTransform="capitalize"
          color="#5C6584"
        >
          copyright &copy; {currentYear}
          {currentYear < endYear ? ` - ${endYear}` : ""} smart me academy. All rights reserved.
        </Typography>
      </Box>
      <CreatorStamp />
    </Box>
  );
};

export default FooterCopyright;
