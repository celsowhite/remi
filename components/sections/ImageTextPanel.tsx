import SanityImage from "@/components/components/SanityImage";
import Link from "../components/Link";
import { SanityButton, SanityImage as SanityImageType } from "@/types";

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
  const PanelImage = () => {
    return (
      <div className="padding-aspect padding-aspect--6/4">
        {image && <SanityImage data={image} />}
      </div>
    );
  };

  // Content
  const PanelContent = () => {
    return (
      <div>
        {eyebrow && <h5>{eyebrow}</h5>}
        {title && <h2 className="mt-2">{title}</h2>}
        {text && <p className="mt-5">{text}</p>}
        {button && (
          <Link url={button.link} className="btn btn--primary mt-5">
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
      <div
        className={`col-span-6 tablet:col-span-12 ${
          imagePosition === "left" ? "" : "tablet:order-last"
        }`}
      >
        {imagePosition === "left" ? <PanelImage /> : <PanelContent />}
      </div>
      <div className="col-span-6 tablet:col-span-12">
        {imagePosition === "left" ? <PanelContent /> : <PanelImage />}
      </div>
    </div>
  );
}
