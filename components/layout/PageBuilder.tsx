import ImageTextPanel from "@/components/sections/ImageTextPanel";
import CardGrid from "@/components/sections/CardGrid";
import ImageWithCaption from "../components/ImageWithCaption";
import AccordionList from "../sections/AccordionList";
import TextBanner from "../sections/TextBanner";
import Hero from "@/components/sections/Hero";
import SectionHeader from "../sections/SectionHeader";
import PortableText from "../components/PortableText";
import EmbedSection from "../sections/EmbedSection";
import LinkList from "../sections/LinkList";

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
        if (block._type === "richText") {
          /*----------------------
          Rich Text
          ----------------------*/
          return (
            <div
              key={block._key}
              className="relative mb-10"
              id={block?.sectionId}
            >
              <div className={containerClass}>
                <div className="wysiwyg">
                  <PortableText value={block.text} />
                </div>
              </div>
            </div>
          );
        } else if (block._type === "embedSection") {
          /*----------------------
          Embed
          ----------------------*/
          return (
            <div
              key={block._key}
              className="relative mb-10"
              id={block?.sectionId}
            >
              <EmbedSection embed={block.embed} />
            </div>
          );
        } else if (block._type === "imageTextPanel") {
          /*----------------------
          Image Text Panel
          ----------------------*/
          return (
            <div
              key={block._key}
              className="relative mb-10"
              id={block?.sectionId}
            >
              <div className={containerClass}>
                <ImageTextPanel
                  eyebrow={block.eyebrow}
                  title={block.title}
                  text={block.text}
                  image={block.image}
                  imagePosition={block.imagePosition}
                  button={block.button}
                />
              </div>
            </div>
          );
        } else if (block._type === "cardGrid") {
          /*----------------------
          Card Grid
          ----------------------*/
          return (
            <div
              key={block._key}
              className="relative mb-10"
              id={block?.sectionId}
            >
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
            <div
              key={block._key}
              className="relative mb-10"
              id={block?.sectionId}
            >
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
            <div
              key={block._key}
              className="relative mb-10"
              id={block?.sectionId}
            >
              <div className={containerClass}>
                <AccordionList key={block._key} accordions={block.accordions} />
              </div>
            </div>
          );
        } else if (block._type === "textBanner") {
          /*----------------------
          Text Banner
          ----------------------*/
          return (
            <div
              key={block._key}
              className="relative mb-10"
              id={block?.sectionId}
            >
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
            <div
              key={block._key}
              className="relative mb-10"
              id={block?.sectionId}
            >
              <Hero
                eyebrow={block.eyebrow}
                title={block.title}
                text={block.text}
                image={block.image}
                contentPosition={block.contentPosition}
                button={block.button}
              />
            </div>
          );
        } else if (block._type === "sectionHeader") {
          /*----------------------
          Section Header
          ----------------------*/
          return (
            <div
              key={block._key}
              className="relative py-10"
              id={block?.sectionId}
            >
              <SectionHeader
                title={block.title}
                text={block.text}
                contentPosition={block.contentPosition}
              />
            </div>
          );
        } else if (block._type === "linkList") {
          return (
            <div className="relative" id={block?.sectionId} key={block._key}>
              <LinkList links={block?.links} columns={block.columns} />
            </div>
          );
        } else {
          return <></>;
        }
      })}
    </>
  );
}
