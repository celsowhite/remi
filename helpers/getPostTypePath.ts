import { SanityPostTypes } from "@/types";

export default function getPostTypePath(type: SanityPostTypes, slug: string) {
  // Post
  if (type === "post") {
    return `/blog/${slug}`;
  }
  // Post Tag
  else if (type === "post_tag") {
    return `/blog/tag/${slug}`;
  }
  // Page
  else if (type === "page") {
    return `/${slug}`;
  }
  // Home Page
  else if (type === "home_page") {
    return `/`;
  }
  // Blog Page
  else if (type === "blog_page") {
    return `/blog`;
  }
  // Other
  else {
    return `/${slug}`;
  }
}
