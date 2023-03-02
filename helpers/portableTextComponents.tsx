import SanityImage, {
  SanityImageProps,
} from "@/components/components/SanityImage";

/*----------------------
Portable Text Components
----------------------*/
const portableTextComponents: Object = {
  types: {
    // Image
    image: ({ value }: { value: SanityImageProps }) => {
      return <SanityImage data={value} />;
    },
  },
};

export default portableTextComponents;
