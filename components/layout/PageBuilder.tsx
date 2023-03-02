import { PortableText } from "@portabletext/react";
import portableTextComponents from "@/helpers/portableTextComponents";

export default function PageBuilder({ blocks }) {
  return blocks?.map((block) => {
    // Portable Text
    if (block._type === "content_block") {
      return (
        <div key={block._key} className="py-2xl">
          <div className="container max-w-7xl">
            <div className="wysiwyg">
              <PortableText
                value={block.content}
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>
      );
    }
  });
}
