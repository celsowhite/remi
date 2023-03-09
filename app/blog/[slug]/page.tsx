import type { Metadata } from "next";
import { client } from "@/services/sanity/client";
import PageBuilder from "@/components/layout/PageBuilder";
import {
  pageBuilderProjection,
  seoProjection,
} from "@/helpers/groq/projections";
import { generalSettingsQuery } from "@/helpers/groq/queries";

export default async function Page({ params }) {
  /*----------------------
  Page Data
  ----------------------*/
  const pageData = await getPageData(params.slug);

  /*----------------------
  Template
  ----------------------*/
  return (
    <div>
      <div className="py-10">
        <div className="container max-w-5xl">
          <h1>{pageData?.content?.title}</h1>
        </div>
      </div>

      <PageBuilder
        blocks={pageData?.content?.page_builder}
        containerSize="small"
      />
    </div>
  );
}

/*----------------------
Get Page Data
----------------------*/
async function getPageData(slug: string) {
  return await client.fetch(
    `{
      "content": *[_type == "post" && slug.current == $slug][0] {
        ...,
        ${pageBuilderProjection},
        ${seoProjection}
      },
      "general_settings": ${generalSettingsQuery},
    }`,
    { slug: `/blog/${slug}` }
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
Generate Static Params
----------------------*/
export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  const baseSlugs = slugs.map((slug: String) => ({
    slug: slug.substring(slug.lastIndexOf("/") + 1),
  }));

  return baseSlugs;
}

/*----------------------
Revalidation
----------------------*/
export const revalidate = 60;
