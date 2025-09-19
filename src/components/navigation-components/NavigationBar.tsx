"use client"
import { AppBar, Box, IconButton, Toolbar, useScrollTrigger, Link, Drawer } from '@mui/material'

// *** MUI5 Icon imports ***
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// *** style imports ***
import { styles } from "@/styles/styles";
// import Link from 'next/link'
import React, { useState } from 'react'
// import { motion } from 'framer-motion'
import Logo from '../Logo';
import NavTabs from './NavTabs';
import NavigationMenu from './NavigationMenu';
import GlowingButton from '../glowingButton';


interface DashBoardNavigationProps {
    window?: () => Window;
    title?: string;
    children?: React.ReactNode; // ✅ flexible and safe
}


// function ElevationScroll(props: Props) {
//     const { children, window } = props;
//     const trigger = useScrollTrigger({
//         disableHysteresis: true,
//         threshold: 0,
//         target: window ? window() : undefined,
//     });

//     return React.cloneElement(children!, {
//         elevation: trigger ? 1 : 0,
//         ...props,
//     });
// }

const NavigationBar: React.FC<DashBoardNavigationProps> = ({
    window, ...rest
}) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
            <Box>
                <Box
                    position="fixed"
                    sx={{
                        zIndex: 99,
                        width: "100%",
                        p: { xs: "0.5rem", lg: "1rem 4rem" },
                    }}
                >
                    {/* <ElevationScroll> */}
                    <AppBar
                        position="static"
                        sx={{
                            ...styles.scrolledAppBar,
                            backgroundColor: trigger ? "#040c108a" : "transparent",
                            // backgroundColor: "",
                            backdropFilter: "blur(10px)",
                            boxShadow: "none",
                        }}
                    >
                        <Toolbar
                            sx={{
                                ...styles.between_flex,
                                border: trigger ? "1px solid #DEC5E350" : "none",
                                // border: "1px solid #DEC5E350",
                                borderRadius: (theme) => theme.shape.borderRadius,
                                position: "relative",
                                maxWidth: "100vw",
                                minHeight: "40px",
                                width: "100%",
                                p: "0.5rem",
                                m: 0,
                            }}
                        >
                            <Box
                                sx={{
                                    ...styles.between_flex,
                                    width: "100%",
                                }}
                            >
                                <Box display="flex" alignItems="center" gap={4}>
                                    <IconButton
                                        size="medium"
                                        aria-label="open drawer"
                                        onClick={handleDrawerToggle}
                                        sx={{
                                            ...styles.iconHover,
                                            borderRadius: "10px",
                                            border: "1px solid #D0A5C055",
                                            display: { xs: "flex", xl: "none" },
                                        }}
                                    >
                                        {!mobileOpen ? <MenuIcon /> : <CloseIcon />}
                                    </IconButton>
                                    <Link href="/">
                                        <Logo />
                                    </Link>
                                </Box>
                                <Box
                                    sx={{
                                        display: { xs: "none", xl: "flex" },
                                        alignItems: "center",
                                    }}
                                >
                                    <NavTabs />
                                </Box>
                                <Box>
                                    <GlowingButton variant='contained' color='primary' type="button">
                                        contact us
                                    </GlowingButton>
                                    {/* <ContactBar /> */}
                                </Box>
                                {/* <Box
                    sx={{
                      display: { xs: "flex", sm: "none" },
                      alignItems: "center",
                    }}
                  >
                    <Stack gap={0.5} direction="row" alignItems="center">
                      <a href="/#contact">
                        <GlowingButtonOutlined
                          variant="outlined"
                          type="button"
                          size="small"
                        >
                          contact us
                        </GlowingButtonOutlined>
                      </a>
                    </Stack>
                  </Box> */}
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {/* </ElevationScroll> */}
                </Box>
                <Drawer
                    {...rest}
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "flex", xl: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: 260,
                            pt: "1rem",
                        },
                    }}
                >
                    <NavigationMenu
                        open={open}
                        anchorEl={anchorEl}
                        setAnchorEl={setAnchorEl}
                        handleDrawerToggle={handleDrawerToggle}
                    />
                </Drawer>
            </Box>
        </>
    )
}

export default NavigationBar