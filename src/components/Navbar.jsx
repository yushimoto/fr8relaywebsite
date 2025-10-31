import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Platform", href: "#benefits" },
    { name: "Benefits", href: "#platform" },
    { name: "About", href: "#media" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
          : "bg-white/80 backdrop-blur-md shadow-sm"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <div className="flex-shrink-0 group">
          <a href="/" className="block">
            <img
              src="/logo.png"
              alt="FR8relay Logo"
              className={`transition-all duration-300 ${
                isScrolled ? "h-10" : "h-12"
              } w-auto group-hover:scale-105`}
            />
          </a>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative text-gray-700 hover:text-gray-900 font-medium text-base font-roboto transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-4">
            <a
              href="#contact"
              className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-semibold font-roboto rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span
              className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </nav>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-4 bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-700 hover:text-gray-900 font-medium text-base font-roboto py-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#contact"
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base font-roboto py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
