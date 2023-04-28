import getPostTypePath from "@/helpers/getPostTypePath";
import { SanityPost } from "@/types";
import Link from "./Link";
import SanityImage from "./SanityImage";
import { formatDate } from "@/helpers/formatDate";

export interface PostCardProps {
  post: SanityPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="relative">
      <Link
        url={getPostTypePath("post", post.slug.current)}
        className="padding-aspect padding-aspect--8/5 block mb-4"
      >
        {post.featured_image && <SanityImage data={post.featured_image} />}
      </Link>
      <h3 className="mb-2">
        <Link url={getPostTypePath("post", post.slug.current)}>
          {post.title}
        </Link>
      </h3>
      <p>{formatDate(post._createdAt)}</p>
      {post.excerpt && <p className="mt-4">{post.excerpt}</p>}
      <Link
        url={getPostTypePath("post", post.slug.current)}
        className="mt-5 block link"
      >
        Read More
      </Link>
    </div>
  );
}
