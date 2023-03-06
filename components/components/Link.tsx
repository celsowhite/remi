import NextLink from "next/link";

export interface LinkProps {
  label: string;
  url: string;
  className?: string;
}

export default function Link({
  label = "",
  url = "",
  className = "",
}: LinkProps) {
  // External Flag
  const isExternal = url
    ? url.indexOf("://") > 0 || url.indexOf("//") === 0
    : false;

  // External Link
  if (isExternal) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className={className}>
        {label}
      </a>
    );
  }

  // Internal Link
  else {
    return (
      <NextLink href={url} className={className}>
        {label}
      </NextLink>
    );
  }
}
