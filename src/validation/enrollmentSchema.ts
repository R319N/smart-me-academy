import { whatsappNumber } from "@/utils/data/constants";
import { m } from "framer-motion";
import * as Yup from "yup";

export const enrollmentSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  surname: Yup.string().required("Surname is required"),
  dob: Yup.date()
    .required("Date of birth is required")
    .typeError("Invalid date"),
  idOrPassport: Yup.string().required("ID / Passport is required"),
  gender: Yup.string().required("Gender is required"),
  grade: Yup.string().required("Grade is required"),
   custodianFullName: Yup.string().required("your name is required"),
  email: Yup.string().required("Email is required"),
  contactNumber: Yup.string().required("contact number is required"),
  whatsappNumber: Yup.string().required("whatsapp number is required"),
  relationshipToStudent: Yup.string().required("please state your relationship"),
  maritalStatus: Yup.string().required("marital status is required"),
  address: Yup.string().required("address is required"),
});
