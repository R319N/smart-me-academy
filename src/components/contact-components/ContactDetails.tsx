// this component was coded by wilfred reign for portfolio presentation
// website:  www.wilfredreign.netlify.app
// facebook: wilfred reign
// contact : +27 61 202 3165
// whatsapp: +27 61 202 3165

// *** MUI5 imports ***
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import Typography from "@mui/material/Typography";
import { styles } from "@/styles/styles";
import contactDetailsdata from "@/utils/data/contact_detailsData";
import Link from '@mui/material/Link';
import Image from "next/image";
import { Grid, Stack } from "@mui/material";
import BusinessMap from "./OurMapLocation";

export default function ContactDetails() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                p: "0"
            }}
        >
            <Stack gap={6} width={"100%"}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <List
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "left",
                                width: "100%",
                                p: "0",
                                m: "0",
                            }}
                        >
                            {contactDetailsdata.map((item, index) => (
                                <Box
                                    sx={{ ...styles.center_flex, textTransform: "capitalize" }}
                                    key={index}
                                >
                                    <MenuItem component={Link} href={item.link} color="secondary" sx={{ width: "100%" }}>
                                        <IconButton sx={{ color: item.color }}>{item.icon}</IconButton>
                                        <ListItemText
                                            primary={item.name}
                                            secondary={item.details}
                                            // color="secondary"
                                            sx={{ mx: "2rem", align: "left", color: "text.secondary" }}
                                        />
                                    </MenuItem>
                                </Box>
                            ))}
                        </List>
                    </Grid>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <BusinessMap />
                    </Grid>
                </Grid>
            </Stack >
        </Box >
    );
}

