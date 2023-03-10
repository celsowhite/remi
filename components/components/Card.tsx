import SanityImage from "./SanityImage";
import Link from "./Link";
import { SanityButton, SanityImage as SanityImageType } from "@/types";
import getSanityLinkUrl from "@/helpers/getSanityLinkUrl";

export interface CardProps {
  _key?: string;
  title: string;
  text?: string;
  image?: SanityImageType;
  button?: SanityButton;
}

export default function Card({ title, text, image, button }: CardProps) {
  return (
    <div>
      {button ? (
        <Link
          className="mb-5 padding-aspect padding-aspect--6/4"
          url={getSanityLinkUrl(button.link)}
        >
          {image && <SanityImage data={image} />}
        </Link>
      ) : (
        <div className="mb-5 padding-aspect padding-aspect--6/4">
          {image && <SanityImage data={image} />}
        </div>
      )}
      {title && <h5 className="mt-4">{title}</h5>}
      {text && <p className="mt-1">{text}</p>}
      {button && (
        <Link url={getSanityLinkUrl(button.link)} className="mt-4 link">
          {button.text}
        </Link>
      )}
    </div>
  );
}
