'use client'
//  *** react imports and next imports ***
import React from "react";

// *** MUI5 imports ***
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import { styles } from "@/styles/styles";

// *** MY COMPONENTS ***
import GlowingButton from "../glowingButton";
// import SocialContacts from "../contact-components/socialContact";
import DeepFooter from "./deepFooter";
import Explore from "./explore";
import Navigation from "./navigation";
import Address from "./address";
import { Stack, Typography } from "@mui/material";

const FooterComponent = () => {
    return (
        <div
            style={{
                zIndex: 99,
                width: "100%",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: { xs: "block", md: "flex-column" },
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    // padding: { xs: "0.5rem", md: "0 5vw" },
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        px: { xs: "1rem", md: "10vw" },
                        // mt: "0.5rem",
                        // mb: "2rem",
                        display: "flex",
                        position: "relative",
                    }}
                >
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Box
                            sx={{
                                ...styles.center_flex,
                                // ...styles.between_flex,
                                justifyContent: "center",
                                flexDirection: "column",
                                width: "100%",
                                // flexDirection: { xs: "row", md: "column" },
                            }}
                        >
                            <Box position="relative" maxHeight="150px" borderRadius="50px" overflow="hidden">
                                <Box
                                    component="img"
                                    sx={{
                                         borderRadius:"50px",
                                        width: "100%",
                                        height: { xs: "60px", md: "60px" },
                                        maxWidth: { xs: "20px", md: "60px" },
                                        my: "0.5rem",
                                        mx: "4rem",
                                    }}
                                    alt="Responsive"
                                    src="/logo2.jpg"
                                />
                            </Box>
                            <a href="#contact">
                                <GlowingButton
                                    type="button"
                                    size="small"
                                    sx={{
                                        width: { xs: "200px", sm: "150px" },
                                        height: "30px",
                                        fontSize: "10px",
                                    }}
                                >
                                    enroll now
                                </GlowingButton>
                            </a>
                        </Box>
                    </Grid>
                    <Grid container size={{ xs: 12, sm: 5 }} >
                        <Grid size={{ xs: 12, sm: 12 }} >
                            <Stack width="fit-content">
                                <Typography
                                    variant="subtitle1"
                                    textTransform="capitalize"
                                    fontWeight={(theme) => theme.typography.fontWeightRegular}
                                    color='#5C6584'
                                >
                                    Useful Links
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 6, sm: 6 }}>
                            <Box mb="0.5rem">
                                <Navigation />

                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }} >
                            <Box mb="0.5rem">
                                <Explore />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid size={{ xs: 6, sm: 3 }}>
                        <Box mb="1rem">
                            <Address />
                        </Box>
                    </Grid>


                </Grid>
                {/* <Box
                    my="1rem"
                    sx={{ ...styles.center_flex, flexDirection: "column" }}
                    gap={2}
                >
                    <SocialContacts />
                </Box> */}
                <Divider />
                <Box>
                    <DeepFooter />
                </Box>
            </Box>
        </div>
    )
}

export default FooterComponent
