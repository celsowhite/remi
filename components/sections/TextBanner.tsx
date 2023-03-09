import Button, { ButtonProps } from "@/components/components/Button";
import { SanityButton } from "@/types";
import Link from "../components/Link";

export interface TextBannerProps {
  eyebrow?: string;
  title: string;
  text?: string;
  button?: SanityButton;
}

export default function TextBanner({
  eyebrow,
  title,
  text,
  button,
}: TextBannerProps) {
  /*----------------------
  Template
  ----------------------*/
  return (
    <div className="py-20 bg-purple-light">
      <div className="container max-w-5xl text-center">
        {eyebrow && <h5>{eyebrow}</h5>}
        {title && <h2 className="mt-2">{title}</h2>}
        {text && <p className="mt-5">{text}</p>}
        {button && (
          <Link url={button?.link?.url} className="btn btn--primary mt-5">
            {button.text}
          </Link>
        )}
      </div>
    </div>
  );
}
