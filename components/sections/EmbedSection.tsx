import Embed, { EmbedProps } from "../components/Embed";

export interface EmbedSectionProps {
  embed: EmbedProps;
}

export default function EmbedSection({ embed }: EmbedSectionProps) {
  /*----------------------
  Template
  ----------------------*/
  return (
    <div className="relative container max-w-7xl">
      <div className={`relative w-full`}>
        <Embed code={embed?.code} script={embed?.script} />
      </div>
    </div>
  );
}
