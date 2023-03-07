import SanityImage from "./SanityImage";
import Link from "./Link";
import { SanityButton } from "@/types";

export interface CardProps {
  _key?: string;
  title: string;
  text?: string;
  image?: object;
  button?: SanityButton;
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
        <Link
          url={
            button?.link?.type === "internal"
              ? button?.link?.internal
              : button?.link?.external
          }
          className="mt-4 link"
        >
          {button.text}
        </Link>
      )}
    </div>
  );
}
