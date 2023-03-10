import type { Metadata } from "next";
import { client } from "@/services/sanity/client";
import PageBuilder from "@/components/layout/PageBuilder";
import { generalSettingsQuery, postBySlugQuery } from "@/helpers/groq/queries";
import Link from "@/components/components/Link";
import { SanityTag } from "@/types";
import getPostTypePath from "@/helpers/getPostTypePath";

export default async function Page({ params }) {
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
        <div className="container max-w-5xl">
          <h1>{pageData?.content?.title}</h1>
        </div>
      </div>

      {/* Content */}
      <PageBuilder
        blocks={pageData?.content?.page_builder}
        containerSize="small"
      />

      {/* Tags */}
      <div className="container max-w-5xl">
        <ul className="flex">
          {pageData?.content?.tags.map((tag: SanityTag) => {
            return (
              <li>
                <Link
                  url={getPostTypePath("post_tag", tag.slug.current)}
                  className="p-2 bg-purple-light mr-2 uppercase text-sm"
                >
                  {tag.title}
                </Link>
              </li>
            );
          })}
        </ul>
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
      "content": ${postBySlugQuery},
      "general_settings": ${generalSettingsQuery},
    }`,
    { slug: slug }
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
      url: `${pageData?.general_settings?.site_url}/blog${pageData?.content?.slug?.current}`,
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
Generate Static Params
----------------------*/
export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return slugs.map((slug: String) => ({
    slug: slug,
  }));
}

/*----------------------
Revalidation
----------------------*/
export const revalidate = 60;
