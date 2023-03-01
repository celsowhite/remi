import Logo from "@/components/Logo";
import ShopifyLogo from "@/components/ShopifyLogo";

export default function Page() {
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
      <div className="wysiwyg py-10">
        <div className="container mx-auto">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            blandit sed libero eget fringilla. Suspendisse potenti. Suspendisse
            lobortis lorem enim, sollicitudin lacinia ipsum consequat a. Integer
            mattis consequat arcu sit amet tincidunt. Nunc semper lacus id arcu
            pellentesque aliquet. Fusce ut velit accumsan, placerat lectus non,
            cursus justo. Quisque in nibh sit amet odio hendrerit laoreet
            euismod sit amet dui. Nulla mattis mi id erat ultrices fringilla.
            Quisque quam leo, faucibus a lacus at, faucibus congue ex. Praesent
            purus dolor, auctor eget facilisis nec, consectetur ac odio.
          </p>{" "}
          <p>
            Suspendisse justo velit, molestie sit amet turpis nec, consectetur
            hendrerit tellus. Nulla eleifend, dolor in volutpat finibus, ante ex
            tempus lectus, nec accumsan mauris diam ac neque. Nullam dictum
            pharetra libero, non pretium erat consectetur varius. Nullam dui
            ligula, venenatis vitae lectus at, faucibus convallis dui.
            Suspendisse potenti. Pellentesque bibendum lacinia tellus eu
            tincidunt. Suspendisse potenti. Sed accumsan pellentesque odio a
            tempor. Nam at urna eu odio interdum pretium. Phasellus faucibus
            augue vitae lectus faucibus, at commodo lectus facilisis. Nunc ac mi
            elit. Duis ipsum diam, cursus fermentum tortor tincidunt, pulvinar
            tristique augue. Pellentesque non euismod odio. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Ut eu libero massa. Aenean at fringilla dolor. Nulla
            facilisis consectetur augue mattis feugiat.
          </p>{" "}
          <p>
            Suspendisse in lectus varius ex rhoncus pretium. Pellentesque
            dapibus facilisis sapien, sed commodo orci laoreet vitae. Sed
            tristique nibh et massa convallis sagittis. Praesent fermentum
            imperdiet tellus, et interdum felis sagittis ut. Vivamus vitae dolor
            at nisi cursus accumsan eu nec dolor. Duis facilisis eget ligula ut
            tristique. Morbi ultricies augue sed nisi sagittis iaculis. Mauris
            lacus dui, dapibus vel accumsan a, faucibus id eros. Suspendisse
            vestibulum consequat tellus ac mattis. Donec et dictum purus. Nullam
            a ullamcorper augue, vitae mollis nunc. Suspendisse fermentum dolor
            eget ligula sodales lobortis. Duis ut est diam. Maecenas diam
            tellus, mollis et pellentesque eget, eleifend non dolor.
          </p>
        </div>
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
