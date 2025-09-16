export interface NavigationItem {
  name: string;
  url: string;
  href: string;
  isTab?: boolean;
  isFooter?: boolean;
  isNavigation?: boolean;
  isExplore?: boolean;
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
    name: "enroll",
    url: "/#enroll",
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
    url: "/#documents",
    href: "/",
    isTab: true,
    isExplore: true,
  },
  {
    name: "payment",
    url: "/#payment",
    href: "/",
    isTab: true,
    isNavigation: true,
  },
  {
    name: "subjects",
    url: "/subjects",
    href: "/",
    isExplore: true,
  },
  {
    name: "help",
    url: "/help",
    href: "/",
    isNavigation: true,
  },
];
export default navigation;
