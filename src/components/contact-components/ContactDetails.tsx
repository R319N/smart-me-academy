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
import SocialContacts from "./socialContact";
import contactDetailsdata from "@/utils/data/contact_detailsData";
import Link from '@mui/material/Link';

export default function ContactDetails() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                p: "1rem 2rem"
            }}
            gap={6}
        >
            <Box sx={{ ...styles.between_flex, flexDirection: "column" }} gap={1}>
                <Box sx={{ position: "relative", display: "flex", alignItems: "center" }} gap={2}>
                    <Box
                        component="img"
                        sx={{
                            // width: "100%",
                            height: { xs: "100%", md: "14vh" },
                            width: { xs: "100%", md: "14vh" },
                            borderRadius: "50px"
                        }}
                        alt="Responsive"
                        src="/Logo1.jpg"
                    />
                    <Typography
                        variant="body2"
                        textAlign="left"
                        sx={{
                            textTransform: "capitalize",
                            color: '#5C6584',
                            width: { xs: "90%", lg: "60%" },
                        }}
                    >
                        gene 20 specialises in crafting customised solutions to meet your
                        unique needs. contact us now on any of our platforms
                    </Typography>
                </Box>
            </Box>

            <List
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    width: "100",
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
                                color="secondary"
                                sx={{ mx: "2rem", align: "left" }}
                            />
                        </MenuItem>
                    </Box>
                ))}
            </List>
            <Box>
                <SocialContacts />
            </Box>
        </Box>
    );
}

