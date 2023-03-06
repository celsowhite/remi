import Link from "next/link";

export interface ButtonProps {
  text: string;
  url: string;
  className?: string;
}

export default function Button({
  text = "",
  url = "",
  className = "",
  ...passThroughProps
}: ButtonProps) {
  // External Flag
  const isExternal = url
    ? url.indexOf("://") > 0 || url.indexOf("//") === 0
    : false;

  // External Link
  if (isExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={className}
        {...passThroughProps}
      >
        {text}
      </a>
    );
  }

  // Internal Link
  else {
    return (
      <Link href={url} className={className} {...passThroughProps}>
        {text}
      </Link>
    );
  }
}
