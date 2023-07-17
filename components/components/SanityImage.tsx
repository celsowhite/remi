"use client";

import { useNextSanityImage, UseNextSanityImageProps } from "next-sanity-image";
import { client } from "@/services/sanity/client";
import Image from "next/image";
import { BasicImageType, SanityImageType } from "@/types";

export interface SanityImageProps {
  data: SanityImageType | BasicImageType | string;
  className?: string;
  sizes?: string;
}

export default function SanityImage({
  data,
  className,
  sizes,
}: SanityImageProps) {
  // Typeguard
  const isBasicImage = (
    f: SanityImageType | BasicImageType
  ): f is BasicImageType => {
    return (f as BasicImageType)?.src !== undefined;
  };

  // Dynamically Set Image Data
  // useNextSanityImage must be called top level so needs to be called regardless of if the passed image was a string or basic.
  let sanityImageData;

  // If a string or basic image then need to set fake data so we can still call the next sanity image hook top level.
  if (typeof data === "string" || isBasicImage(data)) {
    sanityImageData = "";
  }
  // Else data from Sanity then set it.
  else {
    sanityImageData = data;
  }

  // Get next sanity image props.
  const imageProps: UseNextSanityImageProps = useNextSanityImage(
    client,
    sanityImageData
  );

  // String then return a basic image. Good for placeholder and local image sourcing.
  if (typeof data === "string") {
    return <img src={data} className={className} alt="" />;
  }
  // Basic image with additional data.
  else if (isBasicImage(data)) {
    return (
      <Image
        src={data.src}
        className={className}
        width={data.width}
        height={data.height}
        alt={data.alt ? data.alt : ""}
      />
    );
  }
  // Else an actual image from Sanity then return the rendered image.
  else {
    return (
      <Image
        {...imageProps}
        className={className}
        alt={data?.alt || ""}
        sizes={sizes}
      />
    );
  }
}
