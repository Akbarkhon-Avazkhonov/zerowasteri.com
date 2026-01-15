import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0B3D33] text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-3xl font-bold mb-4">Zerowasteri</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Creating a world where luxury and sustainability coexist. One bath bomb at a time.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#A06BFF] flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#A06BFF] flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#A06BFF] flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-[#A06BFF] transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A06BFF] transition-colors">
                  Bath & Body
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A06BFF] transition-colors">
                  Hair Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A06BFF] transition-colors">
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">About</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-[#A06BFF] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A06BFF] transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A06BFF] transition-colors">
                  Refill Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A06BFF] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">© 2025 Zerowasteri. All rights reserved.</p>

          <div className="flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-[#A06BFF] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#A06BFF] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#A06BFF] transition-colors">
              Shipping
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
