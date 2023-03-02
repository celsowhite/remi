import Logo from "@/components/assets/Logo";

export default function Footer() {
  return (
    <footer className="bg-purple text-white py-10">
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
    </footer>
  );
}
