'use client'
// *** MUI5 imports ***
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import React from "react";
import navigation from "@/utils/data/navigation_Links";
import { Link } from "@mui/material";

const Explore = () => {
  const infoItems = navigation.filter((item) => item.isInfo);
  return (
    <Box
      sx={{
        display: { sm: "flex-column" },
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{align:"left"}}>
        <List sx={{ cursor: "pointer", px: { xs: "0.5rem", md: "0.5rem" } }}>
          {infoItems.map((route, index) => (
            <ListItem key={index}>
              <ListItemText>
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "capitalize",
                    lineHeight: "1.275rem",
                    color: "textPrimary",
                    "&:hover": { color: (theme) => theme.palette.primary.main },
                  }}
                >
                  <Link href={route.url}>{route.displayName}</Link>
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Explore;
