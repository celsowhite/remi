import Logo from "@/components/assets/Logo";
import { SanityMenu, SanitySocialNetwork } from "@/types";
import Link from "../components/Link";
import getSanityLinkUrl from "@/helpers/getSanityLinkUrl";
import SocialProfileIcons from "../components/SocialProfileIcons";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@sanity/types";
import portableTextComponents from "@/helpers/portableTextComponents";

export interface FooterProps {
  menu1: SanityMenu;
  menu2: SanityMenu;
  socialProfiles: SanitySocialNetwork[];
  copyright?: string;
  byline?: PortableTextBlock;
}

export default function Footer({
  menu1,
  menu2,
  socialProfiles,
  copyright,
  byline,
}: FooterProps) {
  return (
    <footer>
      <div className="bg-black text-white py-10">
        <div className="container">
          {/* Logo */}
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <div className="w-24">
                <Logo />
              </div>
            </div>

            {/* Menu 1 */}
            {menu1 && (
              <div className="col-span-3">
                <h5 className="mb-5">{menu1?.title}</h5>
                <ul>
                  {menu1?.items.map((item) => {
                    return (
                      <li className="mb-2" key={item._key}>
                        <Link url={getSanityLinkUrl(item.link)}>
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Menu 2 */}
            {menu2 && (
              <div className="col-span-3">
                <h5 className="mb-5">{menu1?.title}</h5>
                <ul>
                  {menu1?.items.map((item) => {
                    return (
                      <li className="mb-2" key={item._key}>
                        <Link url={getSanityLinkUrl(item.link)}>
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Social Profiles */}
            {socialProfiles && socialProfiles.length > 0 && (
              <div className="col-span-3">
                <h5 className="mb-5">Social</h5>
                <SocialProfileIcons socialProfiles={socialProfiles} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      {copyright && (
        <div className="bg-black-light py-2">
          <div className="container text-center flex justify-between items-center text-xs">
            {byline && (
              <div className="wysiwyg">
                <PortableText
                  value={byline}
                  components={portableTextComponents}
                />
              </div>
            )}
            {copyright && (
              <div className="">
                © {copyright} {new Date().getFullYear()}
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
