import { PortableTextBlock } from "@sanity/types";

/*----------------------
Types
----------------------*/

export type SocialNetworks =
  | "twitter"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "facebook"
  | "tiktok";

export type SanityPostTypes =
  | "post"
  | "postTag"
  | "page"
  | "homePage"
  | "blogPage";

/*----------------------
Interfaces
----------------------*/

export interface SanityMenu {
  title: string;
  items: SanityNavItem[];
}

export interface SanityNavItem {
  _key: string;
  link: string;
  title: string;
  children: SanityNavItem[];
}

export interface SanityButton {
  text: string;
  link: string;
}

export interface SanitySocialNetwork {
  _key: string;
  network: SocialNetworks;
  url: string;
}

export interface SanityImageType {
  alt?: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface BasicImageType {
  alt?: string;
  src: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface SanityPost {
  _id: string;
  _createdAt: string;
  _type: "post";
  _updatedAt: string;
  slug: {
    current: string;
  };
  featured_image?: SanityImageType;
  title: string;
  excerpt?: string;
}

export interface SanityTag {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export interface SanityHero {
  _type: "_hero";
  eyebrow: string;
  image: SanityImageType;
  text: string;
  title: string;
  button: SanityButton;
  contentPosition: "left" | "center" | "right";
}

export interface SanityAccordionItem {
  _key: string;
  _type: "accordion";
  text: PortableTextBlock | PortableTextBlock[];
  title: string;
}
