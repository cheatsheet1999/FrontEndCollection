import React from 'react';

export interface Logo {
  alt: string;
  src: string;
  mobileSrc: string;
  brandLink: string;
}


export interface Button {
  href: string;
  color?: "gold" | "maroon" | "light" | "dark";
  text: string;
  classes?: string;
  onClick?: () => void;
  onFocus?: () => void;
}

export interface NavTreeProps {
  id: number;
  href?: string;
  text?: string;
  type?: string;
  selected?: boolean;
  items?: [object][];
  buttons?: Button[];
  class?: string;
  onClick?: () => void;
}

export interface HeaderProps {
  isPartner: boolean;
  navTree: NavTreeProps[];
  title?: string;
  baseUrl?: string;
  parentOrg?:  string;
  parentOrgUrl?: string;
  partnerLogo: Logo;
  logo: Logo;
  loggedIn: boolean;
  userName: string;
  loginLink: string;
  onLoginClick?: () => void;
  logoutLink:  string;
  onLogoutClick?: () => void;
  buttons: Button[];
  breakpoint: "Lg" | "Xl";
  animateTitle: boolean;
  expandOnHover: boolean;
  mobileNavTree: NavTreeProps[];
}

export const ASUHeader: React.FunctionComponent<HeaderProps>
