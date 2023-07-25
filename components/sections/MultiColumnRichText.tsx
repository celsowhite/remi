import { useMemo } from "react";
import { PortableTextBlock } from "@sanity/types";
import PortableText from "../components/PortableText";

export interface MultiColumnRichTextProps {
  textBlocks: { _key: string; text: PortableTextBlock | PortableTextBlock[] }[];
  columns?: number;
}

export default function MultiColumnRichText({
  textBlocks,
  columns = 3,
}: MultiColumnRichTextProps) {
  /*----------------------
  Computed
  ----------------------*/
  const columnClass = useMemo(() => {
    if (columns === 2) {
      return "col-span-6 tablet:col-span-6 mobile:col-span-12";
    } else if (columns === 3) {
      return "col-span-4 tablet:col-span-6 mobile:col-span-12";
    } else if (columns === 4) {
      return "col-span-3 tablet:col-span-6 mobile:col-span-12";
    }
  }, [columns]);

  /*----------------------
  Template
  ----------------------*/
  return (
    <div className="grid grid-cols-12 gap-5">
      {textBlocks.map((textBlock) => {
        return (
          <div className={`${columnClass} wysiwyg`} key={textBlock._key}>
            <PortableText value={textBlock.text} />
          </div>
        );
      })}
    </div>
  );
}
