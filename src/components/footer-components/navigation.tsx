'use client'
import React from "react";

// *** MUI5 imports ***
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import navigation from "@/utils/data/navigation_Links";
import Link from "next/link";

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
        <Stack my="5px" width="fit-content">
          <Typography
            variant="subtitle1"
            textTransform="capitalize"
            fontWeight={(theme) => theme.typography.fontWeightRegular}
            color='#5C6584'
          >
            Navigation
          </Typography>
        </Stack>
        <List sx={{ cursor: "pointer", px: "0.5rem" }}>
          {navigationItems.map((route, index) => (
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
