import Link from "./Link";
import { SanitySocialNetwork } from "@/types";
import Icon from "./Icon";

export interface SocialProfileIconProps {
  socialProfiles: SanitySocialNetwork[];
}

export default function SocialProfileIcons({
  socialProfiles,
}: SocialProfileIconProps) {
  /*----------------------
  Template
  ----------------------*/
  return (
    <ul className="flex">
      {socialProfiles?.map((profile) => {
        return (
          <li className="mr-4 w-5 svg-width-full" key={profile._key}>
            <Link url={profile.url}>
              <Icon name={profile.network} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
