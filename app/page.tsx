import Logo from "@/components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-purple text-white py-14">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-40 mx-auto mb-10">
            <Logo />
          </div>
          <h3>
            Schedule promotional images in your Shopify store. Engage users and
            boost sales with relevant and timely content.
          </h3>
        </div>
      </div>
    </main>
  );
}
