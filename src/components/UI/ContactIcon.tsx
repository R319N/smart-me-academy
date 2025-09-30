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

const actions = [
    { icon: <WhatsappIcon sx={{ color: "green" }} />, name: 'chat with whatsapp' },
    { icon: <EmailIcon sx={{ color: "red" }} />, name: 'chat with Email' },
];

export default function ContactIcon() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{
            position: "fixed",
            right: { xs: "1rem", sm: "3rem" },
            bottom: "3rem", height: 320,
            transform: 'translateZ(0px)', flexGrow: 1,
            zIndex: 99
        }}>
            <SpeedDial
                ariaLabel="SpeedDial controlled open example"
                sx={{ position: 'absolute', bottom: 16, right: 16, p: "0", }}
                icon={<SpeedDialIcon sx={{ height: "20px", width: "20px", }} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        sx={{ ...styles.glassOutlined, borderRadius: "50%" }}
                        slotProps={{
                            tooltip: {
                                title: action.name,
                            },
                        }}
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}