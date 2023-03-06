import Card, { CardProps } from "../components/Card";
import { useMemo } from "react";

export interface CardGridProps {
  cards: CardProps[];
  columns?: number;
}

export default function CardGrid({ cards, columns = 3 }: CardGridProps) {
  /*----------------------
  Computed
  ----------------------*/
  const columnClass = useMemo(() => {
    if (columns === 2) {
      return "col-span-6";
    } else if (columns === 3) {
      return "col-span-4";
    } else if (columns === 4) {
      return "col-span-3";
    }
  }, [columns]);

  /*----------------------
  Template
  ----------------------*/
  return (
    <div className="grid grid-cols-12 gap-5">
      {cards.map((card) => {
        return (
          <div className={columnClass} key={card._key}>
            <Card
              title={card.title}
              text={card.text}
              image={card.image}
              button={card.button}
            />
          </div>
        );
      })}
    </div>
  );
}
