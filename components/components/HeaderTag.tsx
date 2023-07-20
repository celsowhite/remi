export interface HeaderTagProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
}

export default function HeaderTag({
  tag,
  className = "",
  children,
}: HeaderTagProps) {
  const TagName = tag || "h1";
  return <TagName className={className}>{children}</TagName>;
}
