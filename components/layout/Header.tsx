"use client";

import Logo from "@/components/assets/Logo";
import Link from "@/components/components/Link";
import { SanityMenu } from "@/types";
import getSanityLinkUrl from "@/helpers/getSanityLinkUrl";
import { NavArrowDown } from "iconoir-react";
import { usePathname } from "next/navigation";

export interface HeaderProps {
  menu: SanityMenu;
}

export default function Header({ menu }: HeaderProps) {
  const pathName = usePathname();

  return (
    <header className="bg-black text-white h-20">
      <div className="container mx-auto h-full">
        <div className="flex justify-between text-sm h-full">
          {/* Logo */}
          <div className="w-20 text-white h-full flex flex-col justify-center">
            <Link url="/">
              <Logo />
            </Link>
          </div>

          {/* Nav */}
          <div className="flex">
            <ul className="flex items-center h-full relative">
              {menu.items.map((item, itemIndex) => {
                const isActive = pathName.includes(item?.link?.internal?.slug);

                return (
                  <li
                    className="h-full px-4 flex items-center group"
                    key={item._key}
                  >
                    <div className="flex items-center cursor-pointer">
                      <Link
                        url={getSanityLinkUrl(item.link)}
                        className={`uppercase font-semibold tracking-wider border-white ${
                          isActive ? "opacity-100" : "opacity-70"
                        }`}
                      >
                        {item.title}
                      </Link>
                      {item?.children && (
                        <div className="ml-2 w-5">
                          <NavArrowDown />
                        </div>
                      )}
                    </div>
                    {item?.children && (
                      <ul
                        className={`invisible group-hover:visible absolute top-full bg-white border border-black text-black rounded-md z-10 ${
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
                                className={`uppercase font-semibold tracking-wider block p-2 bg-white hover:bg-black text-black hover:text-white min-w-[200px] border-b border-black ${
                                  childItemIndex === 0 &&
                                  "rounded-tl-md rounded-tr-md"
                                } ${
                                  childItemIndex === item.children.length - 1 &&
                                  "rounded-bl-md rounded-br-md border-b-0"
                                }`}
                              >
                                {childItem.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
