export interface LinkProps {
  type: "internal" | "external";
  internal: {
    slug: string;
  };
  external: string;
}

export interface NavItemProps {
  _key: string;
  link: LinkProps;
  title: string;
  children: NavItemProps[];
}
