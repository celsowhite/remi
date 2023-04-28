import {
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  Facebook,
  TikTok,
  Mail,
  NavArrowDown,
} from "iconoir-react";

export type Icons =
  | "twitter"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "facebook"
  | "tiktok"
  | "mail"
  | "chevronDown";

export default function Icon({ name }: { name: Icons }) {
  if (name === "twitter") {
    return <Twitter />;
  } else if (name === "instagram") {
    return <Instagram />;
  } else if (name === "linkedin") {
    return <LinkedIn />;
  } else if (name === "youtube") {
    return <YouTube />;
  } else if (name === "facebook") {
    return <Facebook />;
  } else if (name === "tiktok") {
    return <TikTok />;
  } else if (name === "mail") {
    return <Mail />;
  } else if (name === "chevronDown") {
    return <NavArrowDown />;
  } else {
    return <></>;
  }
}
