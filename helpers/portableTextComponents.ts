import SanityImage from "@/components/components/SanityImage";

/*----------------------
Portable Text Components
----------------------*/

const portableTextComponents = {
  types: {
    // Image
    image: ({ value }) => {
      return <SanityImage data={value} />;
    },
    // Embed
    embed: ({ value }) => {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: value.code }}
          className="mb-5"
        ></div>
      );
    },
  },
};

export default portableTextComponents;
