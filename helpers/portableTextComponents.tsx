import Embed, { EmbedProps } from "@/components/components/Embed";
import Link from "@/components/components/Link";
import SanityImage from "@/components/components/SanityImage";
import { SanityImageType } from "@/types";

/*----------------------
Portable Text Components
----------------------*/
const portableTextComponents: Object = {
  types: {
    // Image
    image: ({ value }: { value: SanityImageType }) => {
      return <SanityImage data={value} />;
    },
    // Embed
    embed: ({ value }: { value: EmbedProps }) => {
      return <Embed code={value.code} script={value.script} />;
    },
    // Button
    button: ({
      value,
    }: {
      value: {
        text: string;
        link: string;
      };
    }) => {
      return (
        <p>
          <Link url={value.link} className="btn btn--primary">
            {value.text}
          </Link>
        </p>
      );
    },
  },
};

export default portableTextComponents;
