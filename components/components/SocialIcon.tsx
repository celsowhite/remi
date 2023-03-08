import { SocialNetworks } from "@/types";
import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Linkedin from "../assets/icons/Linkedin";
import Tiktok from "../assets/icons/Tiktok";
import Twitter from "../assets/icons/Twitter";
import Vimeo from "../assets/icons/Vimeo";
import Youtube from "../assets/icons/Youtube";

export interface SocialIconProps {
  network: SocialNetworks;
}

export default function SocialIcon({ network }: SocialIconProps) {
  /*----------------------
  Render Icon
  ----------------------*/
  const renderIcon = (iconName: SocialNetworks) => {
    if (iconName === "twitter") {
      return <Twitter />;
    } else if (iconName === "instagram") {
      return <Instagram />;
    } else if (iconName === "linkedin") {
      return <Linkedin />;
    } else if (iconName === "youtube") {
      return <Youtube />;
    } else if (iconName === "vimeo") {
      return <Vimeo />;
    } else if (iconName === "facebook") {
      return <Facebook />;
    } else if (iconName === "tiktok") {
      return <Tiktok />;
    }
  };

  /*----------------------
  Template
  ----------------------*/
  return <>{renderIcon(network)}</>;
}
