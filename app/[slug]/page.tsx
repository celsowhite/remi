import type { Metadata } from "next";
import { client } from "@/services/sanity/client";
import PageBuilder from "@/components/layout/PageBuilder";
import {
  pageBuilderProjection,
  seoProjection,
} from "@/helpers/groq/projections";
import { generalSettingsQuery } from "@/helpers/groq/queries";
import PageHero from "@/components/sections/PageHero";

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
      {/* Page Hero */}
      <PageHero
        title={pageData?.content?.title}
        pageHero={pageData?.content?.pageHero}
      />

      {/* Page Builder */}
      <PageBuilder blocks={pageData?.content?.pageBuilder} />
    </div>
  );
}

/*----------------------
Get Page Data
----------------------*/
async function getPageData(slug: string) {
  return await client.fetch(
    `{
      "content": *[_type == "page" && slug.current == $slug][0] {
        ...,
        ${pageBuilderProjection},
        ${seoProjection}
      },
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
      url: `${pageData?.generalSettings?.siteUrl}${pageData?.content?.slug?.current}`,
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
    `*[_type == "page" && defined(slug.current)][].slug.current`
  );

  return slugs.map((slug: String) => ({
    slug: slug,
  }));
}

/*----------------------
Revalidation
----------------------*/
export const revalidate = 60;
