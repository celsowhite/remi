"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";
import AccordionItem from "@/components/components/AccordionItem";
import { SanityAccordionItem } from "@/types";

export interface AccordionListProps {
  accordions: SanityAccordionItem[];
}

export default function AccordionList({ accordions }: AccordionListProps) {
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
        content={accordion.text}
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
