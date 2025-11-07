import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  firstName: string;
  surname: string;
  gender: string;
  dob: string;
  grade: string;
  idOrPassport: string;
  custodianFullName: string;
  email: string;
  contactNumber: string;
  whatsappNumber: string;
  relationshipToStudent: string;
  maritalStatus: string;
  address: string;
  monthlyTuition: string;
  paymentDay: string;
  year: string;
  extraLessons: string;
  agreeTerms: boolean;
  agreePayment: boolean;
  registrationFeeAgreed: boolean;
  enrolmentType: "enrolment" | "re-enrolment";
}

const StudentSchema = new Schema<IStudent>(
  {
    firstName: String,
    surname: String,
    enrolmentType: { type: String, enum: ["enrolment", "re-enrolment"], required: true },
    gender: String,
    dob: String,
    grade: String,
    idOrPassport: String,
    custodianFullName: String,
    email: String,
    contactNumber: String,
    whatsappNumber: String,
    relationshipToStudent: String,
    maritalStatus: String,
    address: String,
    monthlyTuition: String,
    paymentDay: String,
    year: String,
    extraLessons: String,
    agreeTerms: Boolean,
    agreePayment: Boolean,
    registrationFeeAgreed: Boolean,
  },
  { timestamps: true }
);

export default mongoose.models.Student ||
  mongoose.model<IStudent>("Student", StudentSchema);
