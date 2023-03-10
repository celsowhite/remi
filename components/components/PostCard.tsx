import getPostTypePath from "@/helpers/getPostTypePath";
import { SanityPost } from "@/types";
import Link from "./Link";
import SanityImage from "./SanityImage";

export interface PostCardProps {
  post: SanityPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="relative">
      <Link
        url={getPostTypePath("post", post.slug.current)}
        className="padding-aspect padding-aspect--8/5 block mb-5"
      >
        {post.featured_image && <SanityImage data={post.featured_image} />}
      </Link>
      <h3>
        <Link url={getPostTypePath("post", post.slug.current)}>
          {post.title}
        </Link>
      </h3>
      {post.excerpt && <p className="mt-5">{post.excerpt}</p>}
      <Link
        url={getPostTypePath("post", post.slug.current)}
        className="mt-5 block link"
      >
        Read More
      </Link>
    </div>
  );
}
