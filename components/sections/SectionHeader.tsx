import SanityImage from "@/components/components/SanityImage";

export interface SectionHeaderProps {
  title: string;
  text?: string;
  contentPosition?: "left" | "center" | "right";
}

export default function SectionHeader({
  title,
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
          contentPosition === "center" && "justify-center text-center"
        }`}
      >
        <div className="max-w-lg">
          {title && <h2 className="mt-2">{title}</h2>}
          {text && <p className="mt-5">{text}</p>}
        </div>
      </div>
    </div>
  );
}
