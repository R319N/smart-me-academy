import * as Yup from "yup";

export const studentDetailsSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  surname: Yup.string().required("Surname is required"),
  dob: Yup.date()
    .required("Date of birth is required")
    .typeError("Invalid date"),
  idOrPassport: Yup.string().required("ID / Passport is required"),
  gender: Yup.string().required("Gender is required"),
  grade: Yup.string().required("Grade is required"),
});
