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
import Image from "next/image";

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
                    <Box>
                        <Image
                            style={{
                                // width: "100%",
                                // height: { xs: "100%", md: "14vh" },
                                // width: { xs: "100%", md: "14vh" },
                                borderRadius: "50px"
                            }}
                            width={100}
                            height={100}
                            alt="Responsive"
                            src="/Logo1.jpg"
                        />
                    </Box>

                    {/* //     sx={{
                    //         // width: "100%",
                    //         // height: { xs: "100%", md: "14vh" },
                    //         // width: { xs: "100%", md: "14vh" },
                    //         borderRadius: "50px"
                    //     }}
                    //     alt="Responsive"
                    //     src="/Logo1.jpg"
                    // /> */}
                    <Typography
                        variant="body2"
                        textAlign="left"
                        sx={{
                            textTransform: "capitalize",
                            color: '#5C6584',
                            width: { xs: "90%", lg: "60%" },
                        }}
                    >
                       Education is more than knowledge; it&apos;s the key to transformation. At Smart Me Academy,
                        we believe that true training shapes not only minds but perspectives, 
                        fostering a deeper understanding of the world. Our programs empower students to 
                        develop critical skills and self-awareness, 
                       preparing them to make meaningful contributions to society.
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
        </Box>
    );
}

