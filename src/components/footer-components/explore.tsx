'use client'
// *** MUI5 imports ***
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import React from "react";
import navigation from "@/utils/data/navigation_Links";

const Explore = () => {
  const exploreItems = navigation.filter((item) => item.isExplore);
  return (
    <Box
      sx={{
        display: { sm: "flex-column" },
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{align:"left"}}>
      <Stack my="5px" width="fit-content">
          <Typography
            variant="subtitle1"
            textTransform="capitalize"
            fontWeight={(theme) => theme.typography.fontWeightRegular}
            color='#5C6584'
          >
            Explore
          </Typography>
        </Stack>
        <List sx={{ cursor: "pointer", px: { xs: "0.5rem", md: "0.5rem" } }}>
          {exploreItems.map((route, index) => (
            <ListItem key={index}>
              <ListItemText>
                <Typography
                  variant="body2"
                  sx={{
                    textTransform: "capitalize",
                    lineHeight: "1.275rem",
                    color: "textPrimary",
                    "&:hover": { color: (theme) => theme.palette.primary.main },
                  }}
                >
                  <a href={route.url}>{route.name}</a>
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
