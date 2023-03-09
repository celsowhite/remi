"use client";

import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image";
import { client } from "@/services/sanity/client";
import Image from "next/image";
import { SanityImage as SanityImageType } from "@/types";

export interface SanityImageProps {
  data: SanityImageType;
  className?: string;
  sizes?: string;
}

export default function SanityImage({
  data,
  className,
  sizes,
}: SanityImageProps) {
  // Get Image Data
  const imageProps: UseNextSanityImageProps = useNextSanityImage(client, data);

  // Template
  return (
    <Image
      {...imageProps}
      className={className}
      alt={data?.alt || ""}
      sizes={sizes}
    />
  );
}
