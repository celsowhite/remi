import Embed, { EmbedProps } from "@/components/components/Embed";
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
  },
};

export default portableTextComponents;
