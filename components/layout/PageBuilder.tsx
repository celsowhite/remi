import { PortableText } from "@portabletext/react";
import portableTextComponents from "@/helpers/portableTextComponents";
import ImageTextPanel from "@/components/sections/ImageTextPanel";
import CardGrid from "@/components/sections/CardGrid";
import SanityImage from "@/components/components/SanityImage";
import ImageWithCaption from "../components/ImageWithCaption";
import AccordionList from "../sections/AccordionList";

export default function PageBuilder({ blocks }) {
  console.log(blocks);

  return blocks?.map((block) => {
    if (block._type === "content_block") {
      /*----------------------
      Content Block
      ----------------------*/
      return (
        <div key={block._key} className="mb-10">
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
    } else if (block._type === "embed") {
      /*----------------------
      Embed
      ----------------------*/
      return (
        <div key={block._key} className="mb-10">
          <div className="container max-w-7xl">
            {" "}
            <div dangerouslySetInnerHTML={{ __html: block.code }}></div>
          </div>
        </div>
      );
    } else if (block._type === "image_text_panel") {
      /*----------------------
      Image Text Panel
      ----------------------*/
      return (
        <div key={block._key} className="mb-10">
          <div className="container max-w-7xl">
            <ImageTextPanel
              eyebrow={block.eyebrow}
              title={block.title}
              text={block.text}
              image={block.image}
              imagePosition={block.image_position}
              button={block.button}
            />
          </div>
        </div>
      );
    } else if (block._type === "card_grid") {
      /*----------------------
      Card Grid
      ----------------------*/
      return (
        <div key={block._key} className="mb-10">
          <div className="container max-w-7xl">
            <CardGrid cards={block.cards} columns={block.columns} />
          </div>
        </div>
      );
    } else if (block._type === "image") {
      /*----------------------
      Image
      ----------------------*/
      return (
        <div key={block._key} className="mb-10">
          <div className="container max-w-7xl">
            <ImageWithCaption image={block} caption={block.caption} />
          </div>
        </div>
      );
    } else if (block._type === "accordions") {
      /*----------------------
      Accordions
      ----------------------*/
      return (
        <div key={block._key} className="mb-10">
          <div className="container max-w-7xl">
            <AccordionList key={block._key} accordions={block.accordions} />
          </div>
        </div>
      );
    }
  });
}
