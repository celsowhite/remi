import type { Metadata } from "next";
import { client } from "@/services/sanity/client";
import PageBuilder from "@/components/layout/PageBuilder";

export default async function Page({ params }) {
  /*----------------------
  Page Date
  ----------------------*/
  const pageData = await getPageData(params.slug);

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
async function getPageData(slug: string) {
  return await client.fetch(
    `{
      "content": *[_type == "page" && slug.current == $slug][0]{
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
      "globalSettings": *[_type == 'site_settings'][0] {
        seo{
          ...,
          image{
            ...,
            asset->{
              url
            }
          }
        },
      }
    }`,
    { slug }
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
            pageData?.globalSettings?.seo?.image?.asset?.url,
          alt:
            pageData?.content?.seo?.image?.alt ||
            pageData?.globalSettings?.seo?.image?.alt,
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
