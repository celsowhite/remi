import SanityImage from "@/components/components/SanityImage";
import { SanityImage as SanityImageType } from "@/types";

/*----------------------
Portable Text Components
----------------------*/
const portableTextComponents: Object = {
  types: {
    // Image
    image: ({ value }: { value: SanityImageType }) => {
      return <SanityImage data={value} />;
    },
  },
};

export default portableTextComponents;
