import SanityImage from "./SanityImage";
import Button, { ButtonProps } from "@/components/components/Button";
import Link from "next/link";

export interface CardProps {
  title: string;
  text?: string;
  image?: object;
  button?: ButtonProps;
}

export default function Card({ title, text, image, button }: CardProps) {
  return (
    <div>
      {button && button.url ? (
        <Link
          className="mb-5 padding-aspect padding-aspect--6/4"
          href={button.url}
        >
          <SanityImage data={image} />
        </Link>
      ) : (
        <div className="mb-5 padding-aspect padding-aspect--6/4">
          <SanityImage data={image} />
        </div>
      )}
      {title && <h5 className="mt-4">{title}</h5>}
      {text && <p className="mt-1">{text}</p>}
      {button && (
        <Button url={button?.url} text={button?.text} className="mt-4 link" />
      )}
    </div>
  );
}
