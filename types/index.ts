/*----------------------
Unions
----------------------*/

export type SocialNetworks =
  | "twitter"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "vimeo"
  | "facebook"
  | "tiktok";

export type SanityPostTypes =
  | "post"
  | "post_tag"
  | "page"
  | "home_page"
  | "blog_page";

/*----------------------
Interfaces
----------------------*/

export interface SanityLink {
  type: "internal" | "external";
  internal: {
    _type: SanityPostTypes;
    slug: string;
  };
  external: string;
}

export interface SanityMenu {
  title: string;
  items: SanityNavItem[];
}

export interface SanityNavItem {
  _key: string;
  link: SanityLink;
  title: string;
  children: SanityNavItem[];
}

export interface SanityButton {
  text: string;
  link: SanityLink;
}

export interface SanitySocialNetwork {
  _key: string;
  network: SocialNetworks;
  url: string;
}

export interface SanityImage {
  alt?: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface SanityPost {
  _id: string;
  slug: {
    current: string;
  };
  featured_image?: SanityImage;
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
