import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/icons-material/Message';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { styles } from '@/styles/styles';
import { emailAddress, whatsappNumber } from '@/utils/data/constants';
import Link from 'next/link';
// import { Link } from 'next/';

const actions = [
    { icon: <WhatsappIcon sx={{ color: "green" }} />, name: 'chat with whatsapp', href: `https://wa.me/${whatsappNumber}?text=Hello%20` },
    { icon: <EmailIcon sx={{ color: "red" }} />, name: 'chat with Email', href: `mailto:${emailAddress}` }
];

export default function ContactIcon() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (url: string) => {
        setOpen(false)
        window.location.href = url
    };


    return (
        <Box sx={{
            position: "fixed",
            right: { xs: "1rem", sm: "3rem" },
            bottom: "3rem", height: 320,
            transform: 'translateZ(0px)', flexGrow: 1,
            zIndex: 99
        }}>
            <SpeedDial
                ariaLabel="Contact Hot Links"
                sx={{
                    position: 'absolute',
                    bottom: 16, right: 16, p: "3", width: "32px", 
                }}
                icon={<SpeedDialIcon sx={{ height: "18px", width: "18px", }} />}
            // onClose={() => handleClose}
            // onOpen={handleOpen}
            // open={open}
            >
                {actions.map((action) => (

                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        // component="a"

                        sx={{ ...styles.glassOutlined, borderRadius: "50%" }}
                        slotProps={{
                            tooltip: {
                                title: action.name,
                            },
                        }}
                        onClick={() => handleClose(action.href)}

                    />

                ))}
            </SpeedDial>
        </Box>
    );
}