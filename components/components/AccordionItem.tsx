import * as Accordion from "@radix-ui/react-accordion";
import { PortableTextBlock } from "@sanity/types";
import Icon from "./Icon";
import PortableText from "./PortableText";

export interface AccordionItemProps {
  index: number;
  value: string;
  title: string;
  content: PortableTextBlock | PortableTextBlock[];
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
      className={`accordion-item py-6 border-black ${
        index === 0 ? "border-t border-b" : "border-b"
      }`}
    >
      <Accordion.Header
        asChild={true}
        className={`accordion-item__header transition-colors`}
      >
        <Accordion.Trigger className="w-full flex justify-between items-center group">
          <h5 className="text-left leading-tight">{title}</h5>
          <div
            className={`accordion-item__icon transition-all ${
              active ? "-rotate-180" : ""
            }`}
          >
            <Icon name="chevronDown" />
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="accordion-item__content">
        <div className="pt-5 max-w-4xl accordion-item__content-inner wysiwyg">
          <PortableText value={content} />
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
