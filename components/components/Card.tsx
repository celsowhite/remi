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
      {/* Image */}
      {image && (
        <>
          {button ? (
            <Link className="mb-5" url={getSanityLinkUrl(button.link)}>
              {image && <SanityImage data={image} />}
            </Link>
          ) : (
            <div className="mb-5">{image && <SanityImage data={image} />}</div>
          )}
        </>
      )}

      {/* Title */}
      {title && (
        <>
          {button ? (
            <h5 className="mt-4">
              <Link
                className="hover:opacity-70"
                url={getSanityLinkUrl(button.link)}
              >
                {title}
              </Link>
            </h5>
          ) : (
            <h5 className="mt-4">{title}</h5>
          )}
        </>
      )}

      {/* Text */}
      {text && <p className="mt-1">{text}</p>}

      {/* Button */}
      {button && (
        <Link url={getSanityLinkUrl(button.link)} className="mt-4 link">
          {button.text}
        </Link>
      )}
    </div>
  );
}
