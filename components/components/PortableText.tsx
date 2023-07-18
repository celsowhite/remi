import { PortableText as PortableTextReact } from "@portabletext/react";
import { PortableTextBlock } from "@sanity/types";
import portableTextComponents from "@/helpers/portableTextComponents";

export interface PortableTextProps {
  value: PortableTextBlock | PortableTextBlock[];
}

export default function PortableText({ value }: PortableTextProps) {
  /*----------------------
  Template
  ----------------------*/
  return (
    <PortableTextReact value={value} components={portableTextComponents} />
  );
}
