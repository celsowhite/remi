import SanityImage from "@/components/components/SanityImage";
import { SanityImage as SanityImageType } from "@/types";

export interface ImageWithCaptionProps {
  image: SanityImageType;
  caption: string;
}

export default function ImageWithCaption({
  image,
  caption,
}: ImageWithCaptionProps) {
  return (
    <div>
      <SanityImage data={image} className="w-full" />
      {caption && <p className="mt-2">{caption}</p>}
    </div>
  );
}
