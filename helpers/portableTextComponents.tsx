import SanityImage from "@/components/components/SanityImage";

/*----------------------
Portable Text Components
----------------------*/

const portableTextComponents: Object = {
  types: {
    // Image
    image: ({ value }) => {
      return <SanityImage data={value} />;
    },
  },
};

export default portableTextComponents;
