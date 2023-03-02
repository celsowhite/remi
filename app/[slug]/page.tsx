import { client } from "@/services/sanity/client";
import PageBuilder from "@/components/layout/PageBuilder";

export default async function Page({ params }) {
  /*----------------------
  Params
  ----------------------*/
  const { slug } = params;

  /*----------------------
  Content
  ----------------------*/
  const content = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      ...,
    }`,
    { slug }
  );

  /*----------------------
  Template
  ----------------------*/
  return (
    <div className="py-10">
      <PageBuilder blocks={content?.page_builder} />
    </div>
  );
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
