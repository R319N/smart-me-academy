'use client'
import React from "react";

// *** MUI5 imports ***
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import navigation from "@/utils/data/navigation_Links";
import { styles } from "@/styles/styles";
import { Link } from "@mui/material";

const Navigation = () => {
  const navigationItems = navigation.filter((item) => item.isNavigation);
  return (
    <Box
      sx={{
        display: { sm: "flex-column" },
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{ align: "left" }}>
        <List sx={{ cursor: "pointer", px: "0.5rem" }}>
          {navigationItems.map((route, index) => (
            <ListItem key={index} sx={{...styles.textHighlight}}>
              <ListItemText >
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: (theme) => theme.typography.fontWeightRegular,
                  }}
                >
                  <Link href={route.url}>{route.name}</Link>
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Navigation;
