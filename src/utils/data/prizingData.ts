interface PackageItem {
  text: string; // Description of the feature
  isGreen: boolean; // Indicates whether the feature is included
}

interface PackageData {
  key: string; // Unique identifier for the package
  pricePlan: string; // Name of the package plan
  slug: string; // URL-friendly identifier for the package
  recommendation: string; // Recommended use case for the package
  priceRange: number | string; // Price of the package
  bg: string; // Background color for the package card
  items: PackageItem[]; // List of features included in the package
}

export const packagesData: PackageData[] = [
  {
    key: 'basic',
    pricePlan: 'Basic Plan',
    slug: 'basic',
    recommendation: 'Recommended for informative websites, start-up businesses',
    priceRange: 699,
    bg: '#CD7F3255',
    items: [
      { text: 'Functional website', isGreen: true },
      { text: 'Single page with up to 5 sections', isGreen: true },
      { text: 'Responsive design', isGreen: true },
      { text: '1x revision', isGreen: true },
      { text: 'Social media icons', isGreen: true },
      { text: 'Up to 5 stock images', isGreen: true },
      { text: 'Content management system', isGreen: false },
      { text: 'Custom design', isGreen: false },
    ],
  },
  {
    key: 'standard',
    pricePlan: 'Standard Plan',
    slug: 'standard',
    recommendation: 'Recommended for company portfolio websites',
    priceRange: 1799,
    bg: '#C0C0C055',
    items: [
      { text: 'Functional portfolio website', isGreen: true },
      { text: 'Single page with up to 5 pages/sections', isGreen: true },
      { text: 'Responsive design', isGreen: true },
      { text: '3x revisions', isGreen: true },
      { text: 'Social media icons', isGreen: true },
      { text: 'Up to 10 stock images', isGreen: true },
      { text: 'Content management system', isGreen: true },
      { text: 'Custom design', isGreen: true },
    ],
  },
  {
    key: 'premium',
    pricePlan: 'Premium Plan',
    slug: 'premium',
    recommendation: 'Recommended for e-commerce websites and enterprises',
    priceRange: 4999,
    bg: '#FFD70055',
    items: [
      { text: '10+ pages', isGreen: true },
      { text: '5x revisions', isGreen: true },
      { text: 'Responsive design', isGreen: true },
      { text: 'WhatsApp integration', isGreen: true },
      { text: 'Social media integration', isGreen: true },
      { text: 'Unlimited stock images', isGreen: true },
      { text: 'Content management system', isGreen: true },
      { text: 'Custom design', isGreen: true },
    ],
  },
];

