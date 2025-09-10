import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ImageIcon from "@mui/icons-material/Image";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import { ReactNode } from "react";

// Define the type for a single service
interface Service {
  key: string; // Unique identifier for the service
  name: string; // Name of the service
  imgURL: string; // Image URL for the service
  icon?: ReactNode; // Optional icon property for the service
  inDetail: string; // Detailed description of the service
}

// Array of services with properly typed objects
const ourServices: Service[] = [
  {
    key: "1",
    name: "Website Development",
    imgURL: "/web-dev.jpg",
    inDetail:
      "We offer you web development services to suit your requirements - check our pricing list for more information.",
    icon: <CodeIcon sx={{ color: "#dec5e3" }} />,
  },
  {
    key: "2",
    name: "Branding",
    imgURL: "/branding2.jpg",
    inDetail:
      "Your IT-based solution service provider. We have a wide variety of IT services that we provide. Just name your requirement and inquire with us. Our services cover almost the entire tech industry.",
    icon: <ImageIcon sx={{ color: "#dec5e3" }} />,
  },
  {
    key: "3",
    name: "Video/Picture Editing",
    imgURL: "/video-edit.jpg",
    inDetail:
      "Create your brand image with us. We design a variety of masterpieces, including your logo, flyers, business cards, and much more.",
    icon: <MovieCreationIcon sx={{ color: "#dec5e3" }} />,
  },
  {
    key: "4",
    name: "Graphic Design",
    imgURL: "/design.jpg",
    inDetail:
      "It matters how your website looks. Despite having good products, you cannot do without an awesome-looking theme on the internet. We have a range of experts ready to deliver the best for your needs.",
    icon: <DesignServicesIcon sx={{ color: "#dec5e3" }} />,
  },
  {
    key: "5",
    name: "Mobile Development",
    imgURL: "/mobile-dev.jpg",
    inDetail:
      "With a range of tech experts in the industry, we aim to provide you with world-class software apps, whether it be for your mobile or PC, we're there.",
    icon: <DeveloperModeIcon sx={{ color: "#dec5e3" }} />,
  },
];

export default ourServices;
