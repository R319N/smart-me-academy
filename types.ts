// types.ts
export interface EnrollmentFormData {
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
  idImage: File | null;
  proofOfResidence: File | null;
  birthCertificate: File | null;
  latestCardReport: File | null;
  monthlyTuition: string;
  paymentDay: string;
  year: string;
  extraLessons: string;
  agreeTerms: boolean;
  agreePayment: boolean;
  registrationFeeAgreed: boolean;
}
