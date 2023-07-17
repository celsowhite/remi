import { PortableText } from "@portabletext/react";
import portableTextComponents from "@/helpers/portableTextComponents";
import ImageTextPanel from "@/components/sections/ImageTextPanel";
import CardGrid from "@/components/sections/CardGrid";
import ImageWithCaption from "../components/ImageWithCaption";
import AccordionList from "../sections/AccordionList";
import TextBanner from "../sections/TextBanner";
import Hero from "@/components/sections/Hero";
import SectionHeader from "../sections/SectionHeader";

export interface PageBuilderProps {
  blocks: [any];
  containerSize?: string;
}

export default function PageBuilder({
  blocks,
  containerSize = "large",
}: PageBuilderProps) {
  /*----------------------
  Style
  ----------------------*/
  let containerClass: string;
  if (containerSize === "large") {
    containerClass = "container max-w-7xl";
  } else if (containerSize === "medium") {
    containerClass = "container max-w-6xl";
  } else if (containerSize === "small") {
    containerClass = "container max-w-5xl";
  }

  return (
    <>
      {blocks?.map((block) => {
        if (block._type === "rich_text") {
          /*----------------------
          Content Block
          ----------------------*/
          return (
            <div key={block._key} className="mb-10">
              <div className={containerClass}>
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
              <div className={containerClass}>
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
              <div className={containerClass}>
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
              <div className={containerClass}>
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
              <div className={containerClass}>
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
              <div className={containerClass}>
                <AccordionList key={block._key} accordions={block.accordions} />
              </div>
            </div>
          );
        } else if (block._type === "text_banner") {
          /*----------------------
          Text Banner
          ----------------------*/
          return (
            <div key={block._key} className="mb-10">
              <TextBanner
                eyebrow={block?.eyebrow}
                title={block?.title}
                text={block?.text}
                button={block?.button}
              />
            </div>
          );
        } else if (block._type === "hero") {
          /*----------------------
          Hero
          ----------------------*/
          return (
            <div key={block._key} className="mb-10">
              <Hero
                eyebrow={block.eyebrow}
                title={block.title}
                text={block.text}
                image={block.image}
                content_position={block.content_position}
                button={block.button}
              />
            </div>
          );
        } else if (block._type === "section_header") {
          /*----------------------
          Section Header
          ----------------------*/
          return (
            <div key={block._key} className="mb-10">
              <SectionHeader
                title={block.title}
                text={block.text}
                contentPosition={block.content_position}
              />
            </div>
          );
        } else {
          return <></>;
        }
      })}
    </>
  );
}
