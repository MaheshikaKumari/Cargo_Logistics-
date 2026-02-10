import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent only on Home top
  const isHomeTop = location.pathname === "/" && !scrolled;
  const navbarBg = isHomeTop
    ? "bg-transparent text-white"
    : "bg-blue-900 text-white shadow-md";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl tracking-wide">
            CARGO <span className="text-orange-400">LOGISTICS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="hover:text-orange-300 transition">
              Home
            </Link>
            <Link to="/about-details" className="hover:text-orange-300 transition">
              About Us
            </Link>
            <Link to="/services" className="hover:text-orange-300 transition">
              Services
            </Link>
            <Link to="/gallery" className="hover:text-orange-300 transition">
              Fleet Gallery
            </Link>
            <Link to="/contact" className="hover:text-orange-300 transition">
              Contact
            </Link>

            <Link to="/track"className="px-4 py-2 rounded-md border border-white/40 bg-white/10 hover:bg-white/20 transition">
             Track Shipment
             </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-950/95 backdrop-blur text-white px-6 pb-6 pt-2 space-y-4">
          <Link to="/" className="block">
            Home
          </Link>
          <Link to="/about-details" className="block">
            About Us
          </Link>
          <Link to="/services" className="block">
            Services
          </Link>
          <Link to="/gallery" className="block">
            Fleet Gallery
          </Link>
          <Link to="/contact" className="block">
            Contact
          </Link>

          <Link to="/track"className="px-4 py-2 rounded-md border border-white/40 bg-white/10 hover:bg-white/20 transition">
             Track Shipment
             </Link>
        </div>
      )}
    </nav>
  );
}
