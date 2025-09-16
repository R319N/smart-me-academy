export interface DocumentsProps {
    name: string;
    description: string;
    size: string;
    link: string;
}

const DocumentsData: DocumentsProps[] = [
    {
        name: "Enrollment Form",
        description: "Smart Me Academy's Enrollment form.",
        size: "15kb",
        link: "google"
    },
    {
        name: "School Fees Policy",
        description: "Our latest school fee's policy.",
        size: "15kb",
        link: "google"
    }, {
        name: "Contract",
        description: "Smart Me Academy 2025 Enrollment Contract.",
        size: "15kb",
        link: "google"
    }, {
        name: "code of conduct",
        description: "Smart Me Academy Policies from Privacy, Conduct, Dressing, and more.",
        size: "15kb",
        link: "google"
    },
]
export default DocumentsData