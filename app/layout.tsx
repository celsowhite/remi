import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { client } from "@/services/sanity/client";
import "../styles/main.css";

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
      "settings": *[_type == 'site_settings'][0] {
        ...,
        seo{
          ...,
          image{
            ...,
            asset->{
              url
            }
          }
        }
      },
      "main_navigation": *[_type == 'navigation' && slug.current == 'main-navigation'][0] {
        ...,
        items[]{
          ...,
          link{
            ...,
            internal->{
              "slug": slug.current
            }
          }
        }
      }
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
      default: globalData?.settings?.seo?.title,
      template: `%s | ${globalData?.settings?.seo?.title}`,
    },
    description: globalData?.settings?.seo?.description,
    openGraph: {
      type: "website",
      url: globalData?.settings?.site_url,
      title: globalData?.settings?.seo?.title || globalData?.settings?.title,
      description: globalData?.settings?.seo?.description,
      images: [
        {
          url: globalData?.settings?.seo?.image?.asset?.url,
          alt: globalData?.settings?.seo?.image?.alt,
        },
      ],
      siteName: globalData?.settings?.title,
    },
    twitter: {
      card: "summary_large_image",
      site: globalData?.settings?.twitter_handle,
    },
  };
}
