import Logo from "@/components/assets/Logo";
import ShopifyLogo from "@/components/assets/ShopifyLogo";

export default function Header() {
  return (
    <header className="bg-purple text-white py-8">
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
    </header>
  );
}
