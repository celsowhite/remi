"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";
import AccordionItem, {
  AccordionItemProps,
} from "@/components/components/AccordionItem";

export interface AccordionListProps {
  accordions: [AccordionItemProps];
}

export default function AccordionList({ accordions }: AccordionListProps) {
  console.log(accordions);

  const [activeAccordion, setActiveAccordion] = useState("");

  /*----------------------
  Accordion Items
  ----------------------*/
  const accordionItems = accordions.map((accordion, index) => {
    return (
      <AccordionItem
        key={accordion._key}
        value={accordion._key}
        index={index}
        title={accordion.title}
        content={accordion.text.content}
        active={activeAccordion === accordion._key}
      />
    );
  });

  /*----------------------
  Template
  ----------------------*/
  return (
    <Accordion.Root
      type="single"
      collapsible={true}
      onValueChange={setActiveAccordion}
      className="accordion"
    >
      {accordionItems}
    </Accordion.Root>
  );
}
