import Link from "../components/Link";

export interface ButtonSectionProps {
  button: {
    text: string;
    link: string;
  };
  alignment?: "left" | "center" | "right";
}

export default function ButtonSection({
  button,
  alignment = "center",
}: ButtonSectionProps) {
  /*----------------------
  Template
  ----------------------*/
  return (
    <div className={`relative py-2xl`}>
      <div
        className={`container mx-auto relative z-10 ${
          alignment === "left" && "text-left"
        } ${alignment === "center" && "text-center"}  ${
          alignment === "right" && "text-right"
        }`}
      >
        <Link url={button.link} className="btn btn--primary">
          {button.text}
        </Link>
      </div>
    </div>
  );
}
