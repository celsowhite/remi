import Logo from "@/components/assets/Logo";
import { SanityMenu, SanitySocialNetwork } from "@/types";
import Link from "../components/Link";
import SocialIcon from "../components/SocialIcon";

export interface FooterProps {
  menu1: SanityMenu;
  menu2: SanityMenu;
  socialProfiles: SanitySocialNetwork[];
  copyright?: string;
}

export default function Footer({
  menu1,
  menu2,
  socialProfiles,
  copyright,
}: FooterProps) {
  return (
    <footer>
      <div className="bg-purple text-white py-10">
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
                        <Link url={item?.link?.url}>{item.title}</Link>
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
                        <Link url={item?.link?.url}>{item.title}</Link>
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
                <ul className="flex">
                  {socialProfiles?.map((profile) => {
                    return (
                      <li
                        className="mr-4 w-5 svg-width-full"
                        key={profile._key}
                      >
                        <Link url={profile.url}>
                          <SocialIcon network={profile.network} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      {copyright && (
        <div className="bg-purple-light py-2">
          <div className="container max-w-7xl text-center">
            <p className="text-xs">
              © {copyright} {new Date().getFullYear()}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
