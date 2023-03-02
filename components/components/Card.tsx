import SanityImage from "./SanityImage";

export interface CardProps {
  title: string;
  text?: string;
  image: object;
}

export default function Card({ title, text, image }: CardProps) {
  return (
    <div>
      <div className="mb-5 padding-aspect padding-aspect--6/4">
        <SanityImage data={image} />
      </div>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
}
