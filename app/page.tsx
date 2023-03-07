import Logo from "@/components/assets/Logo";
import { client } from "@/services/sanity/client";
import PageBuilder from "@/components/layout/PageBuilder";
import { homePageQuery, generalSettingsQuery } from "@/helpers/groq/queries";

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
