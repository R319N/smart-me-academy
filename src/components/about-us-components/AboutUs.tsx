import { Box, Button, Card, CardContent, CardHeader, Collapse, Container, IconButton, IconButtonProps, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import HeadingText from '../headerBanner'
import MasonryImageList from './MasonryImageList'
import { styles } from '@/styles/styles'
import GlowingButton from '../glowingButton'
import Image from 'next/image'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    borderRadius: "50px",
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    // p: "1rem",
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

const AboutUs = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Stack gap={5}>
            <Box>
                <HeadingText header="get to know us" subHeader='about us' />
            </Box>
            <MasonryImageList />
            <Stack gap={3} sx={{ ...styles.center_flex, flexDirection: "column", height: "100%", width: "100%" }} >

                <Typography variant='body1' width="100%" textAlign='center' maxWidth={{ xs: "100%", md: "70%" }}>
                    Every learner has the potential to succeed, and at Smart Me Academy, we provide the tools and support to unlock that potential.
                    With a strong foundation and a passion for learning, our students are equipped to achieve their dreams.
                </Typography>
                <Card sx={{ ...styles.glassOutlined, width: "100%" }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" }

                    }}
                        gap={2}
                    >
                        <Box sx={{
                            ...styles.between_flex,
                            background: "#000a14e7",
                            width: "100%", p: "1rem", height: "auto"
                        }}>
                            <Box >
                                <Image
                                    alt="Responsive"
                                    src="/gallery/principal.jpg"
                                    width={100}
                                    height={100}
                                    style={{
                                        borderRadius: "50px"
                                    }}

                                />
                            </Box>
                            <Stack>
                                <Typography variant='h6' fontWeight={(theme) => theme.typography.fontWeightRegular}>
                                    Melissa Nhlapho
                                </Typography >
                                <Typography variant="body2" textAlign={"right"} color='textSecondary' textTransform={"capitalize"}>
                                    principal
                                </Typography>
                            </Stack>
                        </Box>
                        <Box sx={{ width: "100%" }}>
                            <CardContent sx={{ p: "1rem", }}>
                                {/* <Stack gap={1} > */}
                                <Typography variant='h6'
                                    width="100%" color='secondary' textTransform={"capitalize"}
                                    fontWeight={(theme) => theme.typography.fontWeightMedium} >
                                    A Story of our journey
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                    The Smart Me Academy Method of Learning was born from one mother’s love for her child in 2019 Melisa Nhlapho;
                                    who saw a gap in her child’s academics because of COVID 19.

                                </Typography>
                                {/* </Stack> */}
                            </CardContent>
                            <Box sx={{ width: "100%", display: "flex", justifyContent: "right", p: "0 1rem 1rem" }}>
                                <Box
                                    sx={{ ...styles.center_flex, cursor: "pointer" }}
                                    onClick={handleExpandClick}
                                    gap={1}
                                >
                                    <Typography
                                        variant='body1'
                                        textTransform={"capitalize"}
                                        sx={{ ...styles.textHover }}
                                    >
                                        {expanded ? "read less" : "read more"}
                                    </Typography>
                                    <ExpandMore
                                        expand={expanded}

                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>

                                </Box>
                            </Box>
                        </Box>
                    </Box>



                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent sx={{ p: "1rem" }}>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                To help her son improve she staring downloading online
                                worksheets and workbooks for her son to complete daily.
                                Melisa also believed that educators have a responsibility to foster
                                a mindset of self-learning in children. To cover this gap
                                on other children Melisa began to invest her time
                                on her friend’s children.All the children abilities started to improve significantly.
                                Melisa’s desire developed the potential to help as many children as possible,
                                that prompted a significant growth in 2020.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Stack>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "right" }}>
                <GlowingButton>
                    More About Us
                </GlowingButton>
            </Box>

        </Stack>

    )
}

export default AboutUs