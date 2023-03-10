import SanityImage from "@/components/components/SanityImage";
import Link from "../components/Link";
import { SanityButton, SanityImage as SanityImageType } from "@/types";
import getSanityLinkUrl from "@/helpers/getSanityLinkUrl";

export interface ImageTextPanelProps {
  eyebrow?: string;
  title: string;
  text?: string;
  image: SanityImageType;
  imagePosition?: "left" | "right";
  button: SanityButton;
}

export default function ImageTextPanel({
  eyebrow,
  title,
  text,
  image,
  imagePosition = "left",
  button,
}: ImageTextPanelProps) {
  /*----------------------
  Components
  ----------------------*/
  // Image
  const Image = () => {
    return (
      <div className="padding-aspect padding-aspect--6/4">
        {image && <SanityImage data={image} />}
      </div>
    );
  };

  // Content
  const Content = () => {
    return (
      <div>
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
    );
  };

  /*----------------------
  Template
  ----------------------*/
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-6">
        {imagePosition === "left" ? <Image /> : <Content />}
      </div>
      <div className="col-span-6">
        {imagePosition === "left" ? <Content /> : <Image />}
      </div>
    </div>
  );
}
