import type { Metadata } from "next";
import { client } from "@/services/sanity/client";
import {
  generalSettingsQuery,
  postsByTagQuery,
  postTagQuery,
} from "@/helpers/groq/queries";
import { SanityPost } from "@/types";
import PostCard from "@/components/components/PostCard";

export default async function Page({ params }: { params: { slug: string } }) {
  /*----------------------
  Page Data
  ----------------------*/
  const pageData = await getPageData(params.slug);

  /*----------------------
  Template
  ----------------------*/
  return (
    <div className="pb-10">
      {/* Header */}
      <div className="py-10">
        <div className="container max-w-7xl">
          <h1>{pageData?.content?.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-12">
            {pageData?.posts.map((post: SanityPost) => {
              return (
                <div className="col-span-6 tablet:col-span-12" key={post._id}>
                  <PostCard post={post} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/*----------------------
Get Page Data
----------------------*/
async function getPageData(slug: string) {
  return await client.fetch(
    `{
      "content": ${postTagQuery},
      "posts": ${postsByTagQuery},
      "generalSettings": ${generalSettingsQuery},
    }`,
    { slug: slug }
  );
}

/*----------------------
Generate Metadata
----------------------*/
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pageData = await getPageData(params.slug);

  return {
    title: pageData?.content?.seo?.title,
    description: pageData?.content?.seo?.description,
    openGraph: {
      type: "website",
      url: pageData?.content?.siteUrl,
      title: pageData?.content?.seo?.title || pageData?.title,
      description: pageData?.content?.seo?.description,
      siteName: pageData?.content?.title,
      images: [
        {
          url:
            pageData?.content?.seo?.image?.asset?.url ||
            pageData.generalSettings?.seo?.image?.asset?.url,
          alt:
            pageData?.content?.seo?.image?.alt ||
            pageData.generalSettings?.seo?.image?.alt,
        },
      ],
    },
  };
}

/*----------------------
Generate Static Params
----------------------*/
export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "postTag" && defined(slug.current)][].slug.current`
  );

  return slugs.map((slug: String) => ({
    slug: slug,
  }));
}

/*----------------------
Revalidation
----------------------*/
export const revalidate = 60;
