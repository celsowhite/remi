import type { Metadata } from "next";
import { client } from "@/services/sanity/client";
import PageBuilder from "@/components/layout/PageBuilder";
import { homePageQuery, generalSettingsQuery } from "@/helpers/groq/queries";
import PageHero from "@/components/sections/PageHero";

export default async function Home() {
  /*----------------------
  Page Data
  ----------------------*/
  const pageData = await getPageData();

  /*----------------------
  Template
  ----------------------*/
  return (
    <div>
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
async function getPageData() {
  return await client.fetch(
    `{
      "content": ${homePageQuery},
      "generalSettings": ${generalSettingsQuery},
    }`
  );
}

/*----------------------
Generate Metadata
----------------------*/
export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData();
  return {
    title: pageData?.content?.seo?.title,
    description: pageData?.content?.seo?.description,
    openGraph: {
      type: "website",
      url: `${pageData?.generalSettings?.siteUrl}`,
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
