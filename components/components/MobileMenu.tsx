"use client";

import { useState } from "react";
import Link from "@/components/components/Link";
import { SanityMenu } from "@/types";
import getSanityLinkUrl from "@/helpers/getSanityLinkUrl";
import { NavArrowDown } from "iconoir-react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useGlobalStore } from "@/store/useGlobalStore";

export interface MobileMenuProps {
  menu: SanityMenu;
}

export default function MobileMenu({ menu }: MobileMenuProps) {
  // Global Menu Open
  const menuIsOpen = useGlobalStore((state) => state.menuIsOpen);
  const toggleMenuOpen = useGlobalStore((state) => state.toggleMenuOpen);

  // Toggle Submenu Open
  const [openItems, setOpenItems] = useState<string[]>([]);
  const toggleOpen = (menuItem: string) => {
    if (openItems.includes(menuItem)) {
      setOpenItems((prev) => prev.filter((item) => item !== menuItem));
    } else {
      setOpenItems((prev) => [...prev, menuItem]);
    }
  };

  return (
    <div
      className={`absolute top-0 bg-white h-screen w-full overflow-auto ${
        menuIsOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="pt-20 text-black">
        <div className="container">
          {/* Menu Items */}
          <ul className="">
            {menu.items.map((item, itemIndex) => {
              const isOpen = openItems.includes(item.title);

              return (
                <Collapsible.Root
                  open={isOpen}
                  onOpenChange={() => toggleOpen(item.title)}
                  key={item._key}
                >
                  {/* Menu Item */}
                  <li className="w-full border-black border-b py-5">
                    <div className="flex items-center justify-between cursor-pointer w-full">
                      <Link
                        url={getSanityLinkUrl(item.link)}
                        className={`uppercase font-semibold tracking-wider`}
                        onClick={() => toggleMenuOpen()}
                      >
                        {item.title}
                      </Link>
                      {item?.children && (
                        <Collapsible.Trigger asChild>
                          <button
                            className={`ml-2 w-5 transition-all ${
                              isOpen ? "-rotate-180" : ""
                            }`}
                          >
                            <NavArrowDown />
                          </button>
                        </Collapsible.Trigger>
                      )}
                    </div>
                    {/* Child Menu Items */}
                    {item?.children && (
                      <Collapsible.Content>
                        <ul
                          className={`pt-4 pl-4 ${
                            itemIndex === menu.items.length - 1
                              ? "right-0"
                              : "left-0"
                          }`}
                        >
                          {item?.children.map((childItem, childItemIndex) => {
                            return (
                              <li key={childItem._key}>
                                <Link
                                  url={getSanityLinkUrl(childItem.link)}
                                  className={`uppercase font-semibold tracking-wider block ${
                                    childItemIndex === item.children.length - 1
                                      ? "mb-0"
                                      : "mb-2"
                                  }`}
                                  onClick={() => toggleMenuOpen()}
                                >
                                  {childItem.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </Collapsible.Content>
                    )}
                  </li>
                </Collapsible.Root>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
