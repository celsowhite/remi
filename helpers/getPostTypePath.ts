import { SanityPostTypes } from "@/types";

export default function getPostTypePath(type: SanityPostTypes, slug: string) {
  // Post
  if (type === "post") {
    return `/blog/${slug}`;
  }
  // Page
  else if (type === "page") {
    return `/${slug}`;
  }
  // Post Tag
  else if (type === "post_tag") {
    return `/blog/tag/${slug}`;
  }
  // Other
  else {
    return `/${slug}`;
  }
}
