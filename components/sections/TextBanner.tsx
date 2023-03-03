import Button, { ButtonProps } from "@/components/components/Button";

export interface TextBannerProps {
  eyebrow?: string;
  title: string;
  text?: string;
  button?: ButtonProps;
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
          <Button
            url={button?.url}
            text={button?.text}
            className="btn btn--primary mt-5"
          />
        )}
      </div>
    </div>
  );
}
