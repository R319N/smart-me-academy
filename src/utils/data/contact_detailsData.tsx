import EmailButton from "@/components/contact-components/emailButton";
import PhoneCallButton from "@/components/contact-components/phoneButton";
import WhatsAppButton from "@/components/contact-components/whatsAppButton";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import WhatsApp from "@mui/icons-material/WhatsApp";
import LocationIcon from '@mui/icons-material/LocationCity'
import { ReactNode } from "react";

interface Contact {
  name: string,
  details: string | number,
  icon: ReactNode,
  color: string,
  component: ReactNode,
  link?: string
}

const contactDetailsdata: Contact[] = [
  {
    name: "cell contact",
    details: "+27877014003",
    icon: <Phone />,
    color: "blue",
    component: <PhoneCallButton phoneNumber="+27877014003" />,
  },
  {
    name: "email",
    details: "info@smartmeacademy.co.za",
    icon: <Email />,
    color: "red",
    component: <EmailButton emailAddress="info@smartmeacademy.co.za" />,
  },
  {
    name: "whatsapp",
    details: "+27 61 429 9295",
    icon: <WhatsApp />,
    color: "green",
    link: " https://wa.me/27612023165?text=Hie",
    component: <WhatsAppButton phoneNumber={+27614299295} />,
  },
    {
    name: "address",
    details: "84 Gourlay Street, Meyerton 1961",
    icon: <LocationIcon />,
    color: "grey",
    link: " https://wa.me/27612023165?text=Hie%20wilfred%20reign",
    component: <WhatsAppButton phoneNumber={27612023165} />,
  },
];

export default contactDetailsdata;
