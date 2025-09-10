import data from "@/utils/data";
import { Box, List, ListItem } from "@mui/material";
import React from "react";
const MobileContacts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
      }}
    >
      <List sx={{ display: "flex" }}>
        {data.contactDetailsdata.map((item, index) => (
          <ListItem key={index} link={item.link} color="secondary">
            {item.component}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MobileContacts;
