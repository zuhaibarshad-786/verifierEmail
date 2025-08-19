export default function Footer() {
  return (
    <footer
      className="text-white px-6 sm:px-10 md:px-16 lg:px-20 py-15"
      style={{ backgroundColor: "#0F0E1A", fontFamily: "sans-serif" }}
    >
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* Logo + Tagline */}
        <div className="text-center sm:text-left">
          <div className="text-white font-bold text-xl border px-3 py-1 rounded-md inline-block mb-4">
            SSM
          </div>
          <p className="text-[#FFFFFF] text-sm leading-relaxed">
            Next-Gen Email Verification <br /> For Your Growth Engine
          </p>
        </div>

        {/* Product Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Email Finder
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Email Verifier
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Bulk Processor
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Highlights
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t-[0.3px] mt-border-gray-700 pt-10 text-center text-xs sm:text-sm">
        © 2025 EmailNinja. All rights reserved.
      </div>
    </footer>
  );
}
