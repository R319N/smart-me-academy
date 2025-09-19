import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ImageIcon from "@mui/icons-material/Image";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import { ReactNode } from "react";

// Define the type for a single service
interface SubjectProps {
  key: string; // Unique identifier for the service
  name: string; // Name of the service
  imgURL: string; // Image URL for the service
}

// Array of services with properly typed objects
const ourSubjects: SubjectProps[] = [
  {
    key: "1",
    name: "Mathematics",
    imgURL: "/maths.png",
  },
  {
    key: "2",
    name: "English",
    imgURL: "/eng.png",
  },
  {
    key: "3",
    name: "Physical Science",
    imgURL: "/ps.png",
  },
  {
    key: "4",
    name: "Math Literacy",
    imgURL: "/math-lit.png",
  },
  {
    key: "5",
    name: "Afrikaans",
    imgURL: "/afrikaans.png",

  },
  {
    key: "5",
    name: "Life Science",
    imgURL: "/ls.png",

  },
];

export default ourSubjects;
