import type { Metadata } from "next";
import { client } from "@/services/sanity/client";
import PageBuilder from "@/components/layout/PageBuilder";
import { generalSettingsQuery, postBySlugQuery } from "@/helpers/groq/queries";
import Link from "@/components/components/Link";
import { SanityTag } from "@/types";
import getPostTypePath from "@/helpers/getPostTypePath";
import { formatDate } from "@/helpers/formatDate";
import SanityImage from "@/components/components/SanityImage";
import SocialShareIcons from "@/components/components/SocialShareIcons";

export default async function Page({ params }: { params: { slug: string } }) {
  /*----------------------
  Page Data
  ----------------------*/
  const pageData = await getPageData(params.slug);

  /*----------------------
  URL
  ----------------------*/
  const path = getPostTypePath(
    pageData?.content?._type,
    pageData?.content?.slug?.current
  );
  const url = `${pageData?.generalSettings?.siteUrl}${path}`;

  /*----------------------
  Template
  ----------------------*/
  return (
    <div className="pb-10">
      {/* Header */}
      <div className="py-10">
        <div className="container max-w-5xl">
          <h1 className="mb-4">{pageData?.content?.title}</h1>
          <p>{formatDate(pageData?.content?._createdAt)}</p>
        </div>
      </div>

      {/* Featured Image */}
      {pageData?.content?.featured_image && (
        <div className="container max-w-5xl mb-10">
          <SanityImage data={pageData?.content?.featured_image} />
        </div>
      )}

      {/* Content */}
      <PageBuilder
        blocks={pageData?.content?.pageBuilder}
        containerSize="small"
      />

      {/* Post Footer */}
      <div className="container max-w-5xl mb-5 flex justify-between">
        {/* Social Share */}
        <SocialShareIcons url={url} title={pageData?.content?.title} />

        {/* Tags */}
        <ul className="flex">
          {pageData?.content?.tags.map((tag: SanityTag) => {
            return (
              <li key={tag._id}>
                <Link
                  url={getPostTypePath("postTag", tag.slug.current)}
                  className="p-2 bg-black-light mr-2 uppercase text-sm"
                >
                  {tag.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/*----------------------
Get Page Data
----------------------*/
async function getPageData(slug: string) {
  return await client.fetch(
    `{
      "content": ${postBySlugQuery},
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
  const path = getPostTypePath(
    pageData?.content?._type,
    pageData?.content?.slug?.current
  );
  const url = `${pageData?.generalSettings?.siteUrl}${path}`;

  return {
    title: pageData?.content?.seo?.title || pageData?.content?.title,
    description: pageData?.content?.seo?.description,
    openGraph: {
      type: "website",
      url: url,
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
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return slugs.map((slug: String) => ({
    slug: slug,
  }));
}

/*----------------------
Revalidation
----------------------*/
export const revalidate = 60;
