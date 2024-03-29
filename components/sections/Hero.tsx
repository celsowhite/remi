import SanityImage from "@/components/components/SanityImage";
import Link from "../components/Link";
import { SanityButton, SanityImageType } from "@/types";

export interface HeroProps {
  eyebrow?: string;
  title: string;
  text?: string;
  image: SanityImageType;
  mobile_image?: SanityImageType;
  contentPosition?: "left" | "center" | "right";
  button: SanityButton;
  className?: string;
}

export default function Hero({
  eyebrow,
  title,
  text,
  image,
  mobile_image,
  contentPosition = "left",
  button,
  className = "",
}: HeroProps) {
  /*----------------------
  Template
  ----------------------*/
  return (
    <div className={`relative ${className}`}>
      <div
        className={`padding-aspect padding-aspect--video ${
          mobile_image ? "mobile:hidden" : ""
        }`}
      >
        <SanityImage data={image} />
      </div>
      {mobile_image && (
        <div className="hidden mobile:block">
          <SanityImage data={mobile_image} />
        </div>
      )}
      <div className="absolute mobile:relative top-0 left-0 w-full h-full mobile:h-auto flex items-center">
        <div
          className={`container max-w-7xl flex w-full ${
            contentPosition === "center"
              ? "justify-center mobile:justify-start text-center mobile:text-left"
              : ""
          } ${
            contentPosition === "right"
              ? "justify-end mobile:justify-start"
              : ""
          }`}
        >
          <div className="w-1/2 mobile:w-full max-w-lg">
            {eyebrow && <h5>{eyebrow}</h5>}
            {title && <h1 className="mt-2">{title}</h1>}
            {text && <p className="mt-5">{text}</p>}
            {button && button?.text && button?.link && (
              <Link url={button.link} className="btn btn--primary mt-5">
                {button.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
