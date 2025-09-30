export interface NavigationItem {
  name: string;
  displayName?:string;
  url: string;
  href: string;
  isTab?: boolean;
  isFooter?: boolean;
  isNavigation?: boolean;
  isExplore?: boolean;
  isInfo?:boolean;
  icon?: React.ReactNode; // Correct type for JSX icons
}

const navigation: NavigationItem[] = [
  {
    name: "home",
    url: "/#home",
    href: "/",
    isTab: true,
    isFooter: true,
    isNavigation: true,
  
  },
  {
    name: "curriculum",
    url: "/#curriculum",
    href: "/",
    isTab: true,
    isExplore: true,
  },

  {
    name: "about us",
    url: "/#about-us",
    href: "/",
    isTab: true,
    isNavigation: true,
  },

  {
    name: "documents",
    displayName:"check our documents",
    url: "/#documents",
    href: "/",
    isTab: true,
    isInfo: true,
  },
  {
    name: "payment",
    displayName:"view payment information",
    url: "/#payment",
    href: "/",
    isTab: true,
    isInfo: true,
  },
  {
    name: "subjects",
    url: "/subjects",
    href: "/",
    isExplore: true,
  },
  {
    name: "help",
    displayName:"Frequently asked questions",
    url: "/help",
    href: "/",
    isInfo: true,
  },
];
export default navigation;
