import SanityImage from "@/components/components/SanityImage";

export interface ImageWithCaptionProps {
  image: any;
  caption: string;
}

export default function ImageWithCaption({
  image,
  caption,
}: ImageWithCaptionProps) {
  return (
    <div>
      <SanityImage data={image} />
      {caption && <p className="mt-2">{caption}</p>}
    </div>
  );
}
