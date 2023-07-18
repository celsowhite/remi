import { SanityPostTypes } from "@/types";

export default function getPostTypePath(type: SanityPostTypes, slug: string) {
  // Post
  if (type === "post") {
    return `/blog/${slug}`;
  }
  // Post Tag
  else if (type === "postTag") {
    return `/blog/tag/${slug}`;
  }
  // Page
  else if (type === "page") {
    return `/${slug}`;
  }
  // Home Page
  else if (type === "homePage") {
    return `/`;
  }
  // Blog Page
  else if (type === "blogPage") {
    return `/blog`;
  }
  // Other
  else {
    return `/${slug}`;
  }
}
