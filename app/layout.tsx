import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { client } from "@/services/sanity/client";
import "../styles/main.css";
import {
  mainNavigationQuery,
  generalSettingsQuery,
  socialSettingsQuery,
} from "@/helpers/groq/queries";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*----------------------
  Global Data
  ----------------------*/
  const globalData = await getGlobalData();

  /*----------------------
  Template
  ----------------------*/
  return (
    <html lang="en">
      <body>
        <Header nav={globalData.main_navigation} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

/*----------------------
Get Global Data
----------------------*/
async function getGlobalData() {
  return await client.fetch(
    `{
      "general_settings": ${generalSettingsQuery},
      "social_settings": ${socialSettingsQuery},
      "main_navigation": ${mainNavigationQuery}
    }`
  );
}

/*----------------------
Generate Metadata
----------------------*/
export async function generateMetadata({ params }): Promise<Metadata> {
  const globalData = await getGlobalData();

  return {
    title: {
      default: globalData?.general_settings?.seo?.title,
      template: `%s | ${globalData?.general_settings?.seo?.title}`,
    },
    description: globalData?.general_settings?.seo?.description,
    openGraph: {
      type: "website",
      url: globalData?.general_settings?.site_url,
      title:
        globalData?.general_settings?.seo?.title ||
        globalData?.general_settings?.title,
      description: globalData?.general_settings?.seo?.description,
      images: [
        {
          url: globalData?.general_settings?.seo?.image?.asset?.url,
          alt: globalData?.general_settings?.seo?.image?.alt,
        },
      ],
      siteName: globalData?.general_settings?.title,
    },
    twitter: {
      card: "summary_large_image",
      site: globalData?.general_settings?.twitter_handle,
    },
  };
}
