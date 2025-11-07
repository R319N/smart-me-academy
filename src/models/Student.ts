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
  
  // optional file fields (schema does not mark these as required)
  idImage?: string;
  proofOfResidence?: string;
  birthCertificate?: string;
  latestCardReport?: string;

  extraLessons: string;
  agreeTerms: boolean;
  agreePayment: boolean;
  registrationFeeAgreed: boolean;
  enrolmentType: "enrollment" | "re-enrollment";
}

const StudentSchema = new Schema<IStudent>(
  {
    firstName: String,
    surname: String,
    enrolmentType: { type: String, enum: ["enrollment", "re-enrollment"], required: true },
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
    idImage: { type: String },
    proofOfResidence: { type: String },
    birthCertificate: { type: String },
    latestCardReport: { type: String },
    extraLessons: String,
    agreeTerms: Boolean,
    agreePayment: Boolean,
    registrationFeeAgreed: Boolean,
  },
  { timestamps: true }
);

export default mongoose.models.Student ||
  mongoose.model<IStudent>("Student", StudentSchema);
