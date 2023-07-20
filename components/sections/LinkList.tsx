import { useMemo } from "react";
import Link from "../components/Link";

export interface LinkProps {
  text: string;
  link: string;
  _key: string;
}

export interface LinkListProps {
  links: LinkProps[];
  columns?: number;
}

export default function LinkList({ links, columns = 2 }: LinkListProps) {
  /*----------------------
  Computed
  ----------------------*/
  const columnClass = useMemo(() => {
    if (columns === 1) {
      return "col-span-12";
    } else if (columns === 2) {
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
    <div className="mb-2xl">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-12 gap-5">
          {links.map((link) => {
            return (
              <div className={columnClass} key={link._key}>
                <Link
                  className={`bg-black hover:bg-transparent text-white hover:text-black border border-black transition-colors py-md px-lg w-full block rounded-md`}
                  url={link.link}
                >
                  {link.text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
