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
        pageHero={pageData?.content?.page_hero}
      />

      {/* Page Builder */}
      <PageBuilder blocks={pageData?.content?.page_builder} />
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
      "general_settings": ${generalSettingsQuery},
    }`
  );
}

/*----------------------
Generate Metadata
----------------------*/
export async function generateMetadata({ params }): Promise<Metadata> {
  const pageData = await getPageData();
  return {
    title: pageData?.content?.seo?.title,
    description: pageData?.content?.seo?.description,
    openGraph: {
      type: "website",
      url: `${pageData?.general_settings?.site_url}`,
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
