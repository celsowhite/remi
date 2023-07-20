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
import ButtonSection from "../sections/ButtonSection";
import MultiColumnRichText from "../sections/multiColumnRichText";

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
        } else if (block._type === "multiColumnRichText") {
          return (
            <div
              key={block._key}
              className="relative mb-10"
              id={block?.sectionId}
            >
              <div className={containerClass}>
                <MultiColumnRichText
                  textBlocks={block.textBlocks}
                  columns={block.columns}
                />
              </div>
            </div>
          );
        } else if (block._type === "embedSection") {
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
          return (
            <div
              key={block._key}
              className="relative py-10"
              id={block?.sectionId}
            >
              <SectionHeader
                title={block.title}
                titleTag={block.titleTag}
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
        } else if (block._type === "buttonSection") {
          return (
            <div className="relative" id={block?.sectionId} key={block._key}>
              <ButtonSection
                button={block.button}
                alignment={block.alignment}
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
