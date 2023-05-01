import NextLink from "next/link";

export interface LinkProps {
  url: string;
  className?: string;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
}

export default function Link({
  url = "",
  className = "",
  onClick,
  children,
}: LinkProps) {
  // External Flag
  const isExternal =
    url && typeof url === "string"
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
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // Internal Link
  else {
    return (
      <NextLink href={url} className={className} onClick={onClick}>
        {children}
      </NextLink>
    );
  }
}
