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
import FinalStatement from "./finalStatement";

const FooterComponent = () => {
    return (
        <Box
            sx={{
                zIndex: 99,
                width: "100%",
                 px: { xs: "1rem", md: "10vw" },
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
                    spacing={4}
                    sx={{
                       
                        // mt: "0.5rem",
                        // mb: "2rem",
                        display: "flex",
                        position: "relative",
                    }}
                >
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <FinalStatement />
                    </Grid>
                    <Grid container size={{ xs: 12, sm: 8 }} >
                        <Grid size={{ xs: 6, sm: 3 }}>
                            <Stack width="fit-content" gap={1}>
                                <Typography
                                    variant="h6"
                                    textTransform="capitalize"
                                    fontWeight={(theme) => theme.typography.fontWeightMedium}
                                    color='primary'
                                >
                                    Explore
                                </Typography>
                                <Box>
                                    <Navigation />
                                </Box>
                            </Stack>

                        </Grid>
                        <Grid size={{ xs: 12, sm: 5 }} >
                            <Stack width="fit-content" gap={1}>
                                <Typography
                                    variant="h6"
                                    textTransform="capitalize"
                                    fontWeight={(theme) => theme.typography.fontWeightMedium}
                                    color='primary'
                                >
                                    Information
                                </Typography>
                                <Box mb="0.5rem">
                                    <Explore />
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 6, sm: 4 }}>
                            <Stack width="fit-content" gap={1}>
                                <Typography
                                    variant="h6"
                                    textTransform="capitalize"
                                    fontWeight={(theme) => theme.typography.fontWeightMedium}
                                    color='primary'
                                >
                                    contact us
                                </Typography>
                                <Box mb="1rem">
                                    <Address />
                                </Box>
                            </Stack>

                        </Grid>
                    </Grid>
                </Grid>
                <Divider />
                <Box>
                    <DeepFooter />
                </Box>
            </Box>
        </Box>
    )
}

export default FooterComponent
