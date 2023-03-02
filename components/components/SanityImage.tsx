"use client";

import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/services/sanity/client";
import Image from "next/image";

export default function SanityImage({ data, className, sizes }) {
  // Get Image Data
  const imageProps = useNextSanityImage(client, data);

  // Template
  return (
    <Image
      {...imageProps}
      className={className}
      alt={data?.alt || ""}
      sizes={sizes}
      style={
        data?.horizontal_focal_point && data?.vertical_focal_point
          ? {
              objectPosition: `${data?.horizontal_focal_point} ${data?.vertical_focal_point}`,
            }
          : {}
      }
    />
  );
}
