import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            CARGO <span className="text-orange-400">LOGISTICS</span>
          </h2>
          <p className="text-slate-200 text-sm">
            Trusted cargo company delivering excellence in shipping and supply chain solutions worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-slate-200 text-sm">
            <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
            <li><Link to="/aboutus" className="hover:text-orange-400 transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-orange-400 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p className="text-slate-200 text-sm">📍 123 Logistics Street, Colombo, Sri Lanka</p>
          <p className="text-slate-200 text-sm">📧 info@cargologistics.com</p>
          <p className="text-slate-200 text-sm">📞 +94 77 123 4567</p>
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg transition"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-blue-800 pt-4 text-center text-slate-300 text-sm">
        &copy; {new Date().getFullYear()} Cargo Logistics. All rights reserved.
      </div>
    </footer>
  );
}
