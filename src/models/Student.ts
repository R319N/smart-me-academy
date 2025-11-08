import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  enrolmentType: "enrollment" | "re-enrollment";

  // required for enrollment
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

  // optional for re-enrollment, required for enrollment
  idImage?: string;
  proofOfResidence?: string;
  birthCertificate?: string;
  latestCardReport?: string;

  // ALWAYS required for enrollment only
  monthlyTuition: string;
  paymentDay: string;
  year: string;
  extraLessons: string;
  agreeTerms: boolean;
  agreePayment: boolean;
  registrationFeeAgreed: boolean;
}

const isEnrollment = function (this: IStudent) {
  return this.enrolmentType === "enrollment";
};

const StudentSchema = new Schema<IStudent>(
  {
    enrolmentType: {
      type: String,
      enum: ["enrollment", "re-enrollment"],
      required: true,
    },

    firstName: { type: String, required: isEnrollment },
    surname: { type: String, required: isEnrollment },
    gender: { type: String, required: isEnrollment },
    dob: { type: String, required: isEnrollment },
    grade: { type: String, required: isEnrollment },
    idOrPassport: { type: String, required: isEnrollment },
    custodianFullName: { type: String, required: isEnrollment },
    email: { type: String, required: isEnrollment },
    contactNumber: { type: String, required: isEnrollment },
    whatsappNumber: { type: String, required: isEnrollment },
    relationshipToStudent: { type: String, required: isEnrollment },
    maritalStatus: { type: String, required: isEnrollment },
    address: { type: String, required: isEnrollment },

    // FILES — required only for enrollment
    idImage: { type: String, required: isEnrollment },
    proofOfResidence: { type: String, required: isEnrollment },
    birthCertificate: { type: String, required: isEnrollment },
    latestCardReport: { type: String, required: isEnrollment },

    monthlyTuition: { type: String, required: isEnrollment },
    paymentDay: { type: String, required: isEnrollment },
    year: { type: String, required: isEnrollment },
    extraLessons: { type: String, required: isEnrollment },
    agreeTerms: { type: Boolean, required: isEnrollment },
    agreePayment: { type: Boolean, required: isEnrollment },
    registrationFeeAgreed: { type: Boolean, required: isEnrollment },
  },
  { timestamps: true }
);

export default mongoose.models.Student ||
  mongoose.model<IStudent>("Student", StudentSchema);
