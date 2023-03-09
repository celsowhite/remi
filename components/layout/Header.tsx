import Logo from "@/components/assets/Logo";
import ShopifyLogo from "@/components/assets/ShopifyLogo";
import Link from "@/components/components/Link";
import ChevronDown from "@/components/assets/icons/ChevronDown";
import { SanityMenu } from "@/types";

export interface HeaderProps {
  menu: SanityMenu;
}

export default function Header({ menu }: HeaderProps) {
  return (
    <header className="bg-purple text-white py-6">
      <div className="container mx-auto">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="w-24">
            <Logo />
          </div>

          {/* Nav */}
          <div className="flex">
            <ul className="flex items-center h-full mr-10 relative">
              {menu.items.map((item) => {
                return (
                  <li
                    className="h-full px-4 flex items-center group"
                    key={item._key}
                  >
                    <div className="flex items-center cursor-pointer">
                      <Link url={item?.link?.url}>{item.title}</Link>
                      {item?.children && (
                        <div className="ml-3 w-5 svg-width-full">
                          <ChevronDown />
                        </div>
                      )}
                    </div>
                    {item?.children && (
                      <ul
                        className={`invisible group-hover:visible absolute top-full bg-white text-purple rounded-md z-10`}
                      >
                        {item?.children.map((childItem, index) => {
                          return (
                            <li key={childItem._key}>
                              <Link
                                url={childItem?.link?.url}
                                className={`block p-2 bg-white hover:bg-purple-light text-purple min-w-[200px] border-b border-b-purple-light ${
                                  index === 0 && "rounded-tl-md rounded-tr-md"
                                } ${
                                  index === item.children.length - 1 &&
                                  "rounded-bl-md rounded-br-md"
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

            {/* CTA */}
            <ul className="flex items-center">
              <li>
                <a className="rounded-full bg-teal py-1 px-8 flex items-center font-semibold">
                  Install on{" "}
                  <div className="w-24">
                    <ShopifyLogo />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
