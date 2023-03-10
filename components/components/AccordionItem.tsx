import * as Accordion from "@radix-ui/react-accordion";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@sanity/types";
import portableTextComponents from "@/helpers/portableTextComponents";

export interface AccordionItemProps {
  index: number;
  value: string;
  title: string;
  content: PortableTextBlock;
  active: boolean;
}

export default function AccordionItem({
  index,
  value,
  title,
  content,
  active = false,
}: AccordionItemProps) {
  /*----------------------
  Template
  ----------------------*/
  return (
    <Accordion.Item
      value={value}
      className={`accordion-item py-8 ${
        index === 0 ? "border-t border-b" : "border-b"
      }`}
    >
      <Accordion.Header
        asChild={true}
        className={`accordion-item__header transition-colors`}
      >
        <Accordion.Trigger className="w-full flex justify-between items-center group">
          <p className="text-3xl laptop:text-2xl mobile:text-xl text-left leading-tight">
            {title}
          </p>
          <div className="accordion-item__icon">{active ? "-" : "+"}</div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="accordion-item__content">
        <div className="pt-5 max-w-4xl accordion-item__content-inner wysiwyg">
          <PortableText value={content} components={portableTextComponents} />
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
