import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { client } from "@/services/sanity/client";
import "../styles/main.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
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
    `*[_type == 'site_settings'][0] {
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
      default: globalData?.seo?.title,
      template: `%s | ${globalData?.seo?.title}`,
    },
    description: globalData?.seo?.description,
    openGraph: {
      type: "website",
      url: globalData?.site_url,
      title: globalData?.seo?.title || globalData?.title,
      description: globalData?.seo?.description,
      images: [
        {
          url: globalData?.seo?.image?.asset?.url,
          alt: globalData?.seo?.image?.alt,
        },
      ],
      siteName: globalData?.title,
    },
    twitter: {
      card: "summary_large_image",
      site: globalData?.twitter_handle,
    },
  };
}
