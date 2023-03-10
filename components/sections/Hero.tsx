import SanityImage from "@/components/components/SanityImage";
import Link from "../components/Link";
import { SanityButton } from "@/types";
import getSanityLinkUrl from "@/helpers/getSanityLinkUrl";

export interface HeroProps {
  eyebrow?: string;
  title: string;
  text?: string;
  image: object;
  contentPosition?: "left" | "center" | "right";
  button: SanityButton;
  className?: string;
}

export default function Hero({
  eyebrow,
  title,
  text,
  image,
  contentPosition = "left",
  button,
  className = "",
}: HeroProps) {
  /*----------------------
  Template
  ----------------------*/
  return (
    <div className={`relative ${className}`}>
      <div className="padding-aspect padding-aspect--video">
        <SanityImage data={image} />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div
          className={`container max-w-7xl flex w-full ${
            contentPosition === "center" && "justify-center text-center"
          } ${contentPosition === "right" && "justify-end"}`}
        >
          <div className="w-1/2 max-w-lg">
            {eyebrow && <h5>{eyebrow}</h5>}
            {title && <h2 className="mt-2">{title}</h2>}
            {text && <p className="mt-5">{text}</p>}
            {button && (
              <Link
                url={getSanityLinkUrl(button.link)}
                className="btn btn--primary mt-5"
              >
                {button.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
