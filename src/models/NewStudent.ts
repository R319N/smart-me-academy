import mongoose, { Schema, Document, models } from "mongoose";

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

    createdAt: Date;
}

const StudentSchema: Schema = new Schema(
    {
        firstName: { type: String, required: true },
        surname: { type: String, required: true },
        gender: { type: String, required: true },
        dob: { type: String, required: true },
        grade: { type: String, required: true },
        idOrPassport: { type: String, required: true },

        custodianFullName: { type: String, required: true },
        email: { type: String, required: true },
        contactNumber: { type: String, required: true },
        whatsappNumber: { type: String, required: true },
        relationshipToStudent: { type: String, required: true },
        maritalStatus: { type: String, required: true },
        address: { type: String, required: true },

        monthlyTuition: { type: String, required: true },
        paymentDay: { type: String, required: true },
        year: { type: String, required: true },
        extraLessons: { type: String, required: true },
        agreeTerms: { type: Boolean, required: true },
        agreePayment: { type: Boolean, required: true },
        registrationFeeAgreed: { type: Boolean, required: true },
    },
    { timestamps: true }
);

export default models.Student ||
    mongoose.model<IStudent>("Student", StudentSchema);
