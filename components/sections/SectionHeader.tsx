import HeaderTag from "../components/HeaderTag";

export interface SectionHeaderProps {
  title: string;
  titleTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text?: string;
  contentPosition?: "left" | "center" | "right";
}

export default function SectionHeader({
  title,
  titleTag = "h2",
  text,
  contentPosition = "left",
}: SectionHeaderProps) {
  /*----------------------
  Template
  ----------------------*/
  return (
    <div className="">
      <div
        className={`container max-w-7xl flex ${
          contentPosition === "center" ? "justify-center text-center" : ""
        }`}
      >
        <div className="max-w-xl">
          {title && (
            <HeaderTag tag={titleTag} className="mt-2">
              {title}
            </HeaderTag>
          )}
          {text && <p className="mt-5">{text}</p>}
        </div>
      </div>
    </div>
  );
}
