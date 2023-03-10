import { SanityLink } from "@/types";
import getPostTypePath from "./getPostTypePath";

export default function getSanityLinkUrl(link: SanityLink) {
  // If external then return the exact url from the cms.
  if (link.type === "external" && link.external) {
    return link.external;
  }
  // Else internal then format the url path based on the post type.
  else if (link.type === "internal" && link.internal) {
    return getPostTypePath(link.internal._type, link.internal.slug);
  } else {
    return "";
  }
}
