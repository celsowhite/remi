import SanityImage from "@/components/components/SanityImage";
import Button, { ButtonProps } from "@/components/components/Button";

export interface ImageTextPanelProps {
  eyebrow?: string;
  title: string;
  text?: string;
  image: object;
  contentPosition?: "left" | "center" | "right";
  button: ButtonProps;
}

export default function Hero({
  eyebrow,
  title,
  text,
  image,
  contentPosition = "left",
  button,
}: ImageTextPanelProps) {
  /*----------------------
  Template
  ----------------------*/
  return (
    <div className="relative">
      <div className="padding-aspect padding-aspect--6/4">
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
              <Button
                url={button?.url}
                text={button?.text}
                className="btn btn--primary mt-5"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
