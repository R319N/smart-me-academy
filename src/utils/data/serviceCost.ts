export interface websiteTypesItem {
    name: string;
    cost: number

}
export interface stepsItem {
    id?:number;
    title: string;
    subheader: string

}
export const steps: stepsItem[] = [
    // {
    //     id:1,
    //     title: "introduction",
    //     subheader: 'Help us understand your needs by selecting the industry and website type that best fits your project.'
    // },
    {
        id:1,
        title: "Define Your Website Vision",
        subheader: 'Help us understand your needs by selecting the industry and website type that best fits your project.'
    },
    {
        title: "Branding & Design Preferences",
        subheader: "Help us understand your design needs to create a seamless and visually appealing identity for your project."
    },
    {
        title: "Project Scope",
        subheader: "Tell us more about your website structure, revisions, and media needs."
    },
    {
        title: "Budget & Timeline",
        subheader: "Help us understand your design needs to create a seamless and visually appealing identity for your project."
    },
    {
        title: "Domain & Hosting",
        subheader: "Help us understand your design needs to create a seamless and visually appealing identity for your project."
    },
    {
        title: "Review & Calculate",
        subheader: 'Review your selections and calculate the estimated cost for your project'
    },
    {
        title: "Branding & Design Preferences",
        subheader: "Help us understand your design needs to create a seamless and visually appealing identity for your project."
    },
    {
        id:1,
        title: "Reviewe",
        subheader: 'Help us understand your needs by selecting the industry and website type that best fits your project.'
    },
]

/**
 * The base cost per page for the service.
 */
export const baseCostPerPage = 300;



/**
 * List of available service options.
 */
export const serviceOptions = ['Web Design', 'Web Development', 'Logo Design', 'business portfolio', 'mobile app development'];

/**
 * Cost associated with different levels of design complexity.
 */
export const designCost = {
    basic: 0,
    intermediate: 200,
    advanced: 500,
};
export const websiteTypeCost = {

    "Landing Page": 200,
    'Blog or Personal Website': 300,
    'E-commerce Website': 1000,
    // portfolio: 300,
    // business: 350,
};
export const websiteTypeComplexity = [
    'Landing Page', 'Blog or Personal Website', 'E-commerce Website'

    // "Landing Page": 200,
    // 'Blog or Personal Website': 300,
    // 'e-commerce website': 500,
    // portfolio: 300,
    // business: 350,
]
/**
 * Cost associated with additional features.
 */
export const featureCosts = {
    logo: 50,
    customDesign: 500,
    responsive: 100,
    seo: 150,
    ecommerce: 500,
    cms: 300,
};

/**
 * List of design complexity levels.
 */
export const designComplexityLevels = ['basic', 'intermediate', 'advanced'];

/**
 * Descriptions for each design complexity level.
 */
export const designComplexityDescriptions: { [key: string]: string } = {
    basic: 'Suitable for projects with minimal design complexity and straightforward requirements.',
    intermediate: 'Ideal for projects requiring a balanced approach with moderate design needs.',
    advanced: 'Perfect for complex projects demanding high-end designs and intricate features.',
};

/**
 * List of available features.
 */
export const featuresList = ['responsive', 'seo', 'cms'];
/**
 * List of professional industries.
 */
export const professionalIndustries = [
    'Healthcare',
    'Finance',
    'Education',
    'Real Estate',
    'Technology',
    'Retail',
    'Hospitality',
    'Manufacturing',
    'Legal',
    'Marketing',
    'Consulting',
    'Entertainment',
    'Non-Profit',
    'Transportation',
    'Construction',
    'Other'
];

export const websiteTypes: websiteTypesItem[] = [
    {
        name: 'Landing Page',
        cost: 200
    },
    {
        name: 'Portfolio Website',
        cost: 300
    },
    {
        name: 'Blog or Personal Website',
        cost: 300
    },
    {
        name: 'Booking Website',
        cost: 350
    },
    {
        name: 'Membership Website',
        cost: 350
    },
    {
        name: 'Business Website',
        cost: 350
    }, {
        name: 'E-commerce Website',
        cost: 450
    }, {
        name: 'Custom Web Application',
        cost: 700
    }, {
        name: 'Other',
        cost: 300
    },
];