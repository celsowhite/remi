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

/*----------------------
Sanity
----------------------*/

export interface SanityLink {
  type: "internal" | "external";
  internal: string;
  external: string;
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
