"use client"
import { AppBar, Box, IconButton, Toolbar, useScrollTrigger, Link, Drawer, Divider } from '@mui/material'

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
import GlowingButtonOutlined from '../glowingButtonOutlined';
import GlowingIconButton from '../GlowingIconButton';


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
                        // p: {
                        //     xs: trigger ? "0.5rem" : 0,
                        //     lg: trigger ? "1rem 4rem" : "0 4rem"
                        // },
                        
                    }}
                >
                    {/* <ElevationScroll> */}
                    <AppBar
                        position="static"
                        sx={{
                            // ...styles.scrolledAppBar,
                            // backgroundColor: trigger ? "#cad5d350" : "none",
                            // border: trigger ? "1px solid #cad5d377" : "none",
                            // boxShadow: "0 px 1px #cad5d36e",
                            backgroundColor: "#010B13",
                            backdropFilter: trigger ? "blur(10px)" : "none",
                            overflow: "hidden",
                            boxShadow: "none",
                             p: { xs: "0.5rem 0", lg: "0rem 4rem" },
                            // transition:"1s all-ease"
                        }}
                    >
                        <Toolbar
                            sx={{
                                ...styles.between_flex,
                                position: "relative",
                                maxWidth: "100vw",
                                // minHeight: "40px",
                                width: "100%",
                                // p: trigger ? "0.5rem" : "0",
                                transition: "1s padding ease",
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
                                    <GlowingIconButton
                                        size="medium"
                                        aria-label="open drawer"
                                        onClick={handleDrawerToggle}
                                        sx={{
                                            // backdropFilter: "blur(7px)"
                                            // // ...styles.iconHover,
                                            // borderRadius: "10px",
                                            // border: "1px solid",
                                            // borderColor: "textSecondary",
                                            display: { xs: "flex", md: "none" },
                                            color:"white"
                                            //  transition:"5s all-ease"
                                        }}
                                    >
                                        {!mobileOpen ? <MenuIcon sx={{color:"#E6E4CE"}} /> : <CloseIcon />}
                                    </GlowingIconButton>
                                    <Link href="/" sx={{
                                        display: { xs: "none", md: "flex" },
                                    }}>
                                        <Logo />
                                    </Link>
                                </Box>
                                <Box
                                    sx={{
                                        display: { xs: "none", md: "flex" },
                                        alignItems: "center",
                                    }}
                                >
                                    <NavTabs />
                                </Box>
                                <Box gap={2} display="flex" alignItems="center">
                                    <GlowingButton size='small' href='#contact_us'>
                                        contact us
                                    </GlowingButton>
                                    {/* <GlowingButton href='#contact_us' size='small'>
                                        enroll now
                                    </GlowingButton> */}
                                    {/* <ContactBar /> */}
                                </Box>
                            </Box>
                        </Toolbar>
                        {/* <Divider sx={{ display: trigger ? "none" : "flex", margin: 0 }} /> */}
                    </AppBar>

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
                        display: { xs: "flex", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: 260,
                            pt: "1rem",
                            backgroundColor: ("#0A1929E6"),
                            borderRight: "1px solid #CAD5D377",
                            backdropFilter: 'blur(10px)',
                            boxShadow: "0 0 3px #CAD5D377"
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
