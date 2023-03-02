import { client } from "../../services/sanity/client";
import Logo from "@/components/Logo";
import ShopifyLogo from "@/components/ShopifyLogo";
import PageBuilder from "@/components/PageBuilder";

export default async function Page({ params }) {
  console.log(params);

  // Slug
  const { slug } = params;

  // Page Data
  const content = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      ...,
    }`,
    { slug }
  );

  console.log(content);

  return (
    <main>
      {/* Header */}
      <div className="bg-purple text-white py-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <ul className="flex items-center">
              <li className="mr-5">Home</li>
              <li className="mr-5">About</li>
              <li className="mr-5">Blog</li>
            </ul>
            <div className="w-24">
              <Logo />
            </div>
            <ul className="flex items-center">
              <li>
                <a className="rounded-full bg-teal py-1 px-8 flex items-center font-semibold">
                  Install on{" "}
                  <div className="w-24">
                    <ShopifyLogo />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="py-10">
        {/* Page Builder */}
        <PageBuilder blocks={content?.page_builder} />
      </div>

      {/* Footer */}
      <div className="bg-purple text-white py-10">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <div className="w-24">
                <Logo />
              </div>
            </div>
            <div className="col-span-3">
              <h5 className="mb-5">Resources</h5>
              <ul>
                <li className="mb-2">FAQ's</li>
                <li className="mb-2">Blog</li>
              </ul>
            </div>
            <div className="col-span-3">
              <h5 className="mb-5">Follow</h5>
              <ul>
                <li className="mb-2">Twitter</li>
                <li className="mb-2">Email</li>
              </ul>
            </div>
            <div className="col-span-3">
              <h5 className="mb-5">Legal</h5>
              <ul>
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">Email</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
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
