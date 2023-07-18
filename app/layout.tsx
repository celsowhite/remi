import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { client } from "@/services/sanity/client";
import "../styles/main.css";
import {
  generalSettingsQuery,
  headerSettingsQuery,
  footerSettingsQuery,
  socialSettingsQuery,
} from "@/helpers/groq/queries";
import GoogleAnalytics from "@/components/components/GoogleAnalytics";
import { Suspense } from "react";

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
        <Header menu={globalData?.headerSettings?.menu} />
        <main>{children}</main>
        <Footer
          socialProfiles={globalData?.socialSettings?.profiles}
          menu1={globalData?.footerSettings?.footerMenu1}
          menu2={globalData?.footerSettings?.footerMenu2}
          copyright={globalData?.footerSettings?.copyright}
          byline={globalData?.footerSettings?.byline?.content}
        />
        <Suspense>
          <GoogleAnalytics
            id={globalData?.generalSettings?.googleAnalyticsId}
          />
        </Suspense>
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
      "generalSettings": ${generalSettingsQuery},
      "headerSettings": ${headerSettingsQuery},
      "footerSettings": ${footerSettingsQuery},
      "socialSettings": ${socialSettingsQuery},
    }`
  );
}

/*----------------------
Generate Metadata
----------------------*/
export async function generateMetadata(): Promise<Metadata> {
  const globalData = await getGlobalData();

  return {
    metadataBase: globalData?.generalSettings?.siteUrl
      ? new URL(globalData?.generalSettings?.siteUrl)
      : null,
    title: {
      default: globalData?.generalSettings?.seo?.title,
      template: `%s | ${globalData?.generalSettings?.seo?.title}`,
    },
    description: globalData?.generalSettings?.seo?.description,
    openGraph: {
      type: "website",
      url: globalData?.generalSettings?.siteUrl,
      title:
        globalData?.generalSettings?.seo?.title ||
        globalData?.generalSettings?.title,
      description: globalData?.generalSettings?.seo?.description,
      images: [
        {
          url: globalData?.generalSettings?.seo?.image?.asset?.url,
          alt: globalData?.generalSettings?.seo?.image?.alt,
        },
      ],
      siteName: globalData?.generalSettings?.title,
    },
    twitter: {
      card: "summary_large_image",
      site: globalData?.generalSettings?.twitterHandle,
    },
  };
}

/*----------------------
Revalidation
----------------------*/
export const revalidate = 60;
