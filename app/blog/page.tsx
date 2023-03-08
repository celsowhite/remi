import type { Metadata } from "next";
import { client } from "@/services/sanity/client";
import PageBuilder from "@/components/layout/PageBuilder";
import {
  pageBuilderProjection,
  seoProjection,
} from "@/helpers/groq/projections";
import { generalSettingsQuery } from "@/helpers/groq/queries";
import Link from "@/components/components/Link";

export default async function Page({ params }) {
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
            {pageData?.posts.map((post) => {
              return (
                <div className="col-span-6">
                  <h3>
                    <Link url={`/blog/${post.slug.current}`}>{post.title}</Link>
                  </h3>
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
      "content": *[_type == "blog_page"][0] {
        ...,
        ${seoProjection}
      },
      "posts": *[_type == "post"] {
        ...,
      },
      "general_settings": ${generalSettingsQuery},
    }`
  );
}

/*----------------------
Generate Metadata
----------------------*/
export async function generateMetadata({ params }): Promise<Metadata> {
  const pageData = await getPageData(params.slug);

  return {
    title: pageData?.content?.seo?.title,
    description: pageData?.content?.seo?.description,
    openGraph: {
      type: "website",
      url: pageData?.content?.site_url,
      title: pageData?.content?.seo?.title || pageData?.title,
      description: pageData?.content?.seo?.description,
      siteName: pageData?.content?.title,
      images: [
        {
          url:
            pageData?.content?.seo?.image?.asset?.url ||
            pageData.general_settings?.seo?.image?.asset?.url,
          alt:
            pageData?.content?.seo?.image?.alt ||
            pageData.general_settings?.seo?.image?.alt,
        },
      ],
    },
  };
}

/*----------------------
Revalidation
----------------------*/
export const revalidate = 60;
