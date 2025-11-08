// types.ts
export interface EnrollmentFormData {
  enrolmentType?: string;
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
  idImage: File | string | null;
  proofOfResidence: File | string | null;
  birthCertificate: File | string | null;
  latestCardReport: File | string | null;
  monthlyTuition: string;
  paymentDay: string;
  year: string;
  extraLessons: string;
  agreeTerms: boolean;
  agreePayment: boolean;
  registrationFeeAgreed: boolean;
}
