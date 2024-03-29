import type { Metadata } from "next";
import { client } from "@/services/sanity/client";
import {
  blogPageQuery,
  generalSettingsQuery,
  postsQuery,
} from "@/helpers/groq/queries";
import PostCard from "@/components/components/PostCard";
import { SanityPost } from "@/types";

export default async function Page({ params }: { params: { slug: string } }) {
  /*----------------------
  Page Data
  ----------------------*/
  const pageData = await getPageData();

  /*----------------------
  Template
  ----------------------*/
  return (
    <div className="py-10">
      <div className="pb-10">
        <div className="container max-w-7xl">
          <h1>{pageData?.content?.title}</h1>
        </div>
      </div>
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
async function getPageData() {
  return await client.fetch(
    `{
      "content": ${blogPageQuery},
      "posts": ${postsQuery},
      "generalSettings": ${generalSettingsQuery},
    }`
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
  const pageData = await getPageData();

  return {
    title: pageData?.content?.seo?.title || pageData?.content?.title,
    description: pageData?.content?.seo?.description,
    openGraph: {
      type: "website",
      url: `${pageData?.generalSettings?.siteUrl}/blog/tag/${pageData?.content?.slug?.current}`,
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
Revalidation
----------------------*/
export const revalidate = 60;
