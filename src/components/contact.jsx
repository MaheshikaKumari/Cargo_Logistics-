import { useState } from "react";
import Navbar from "./navbar";

export default function Contact() {
  const whatsappNumber = "94771234567"; // without +

  // Quote form state
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [quantity, setQuantity] = useState("");

  // Handle WhatsApp Quote
  const handleQuote = (e) => {
    e.preventDefault();

    const text = `Hi, I'm ${name}, I want to ship ${service} of ${quantity}.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");

    // reset
    setName("");
    setService("");
    setQuantity("");
  };

  return (
    <>
      <Navbar />

      {/* Page Heading */}
      <section className="relative pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            Contact Us
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Get in touch with us or request a shipping quote instantly via
            WhatsApp.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">

          {/* Left: Contact Details + Map */}
          <div className="bg-slate-50 p-6 rounded-2xl shadow-md space-y-4">
            {/* Map */}
            <div className="w-full h-64 rounded-2xl overflow-hidden">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.455102876362!2d79.861243!3d6.927079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25924d5e2c9df%3A0x8f8c7c5c2c9c7b0!2sColombo!5e0!3m2!1sen!2slk!4v1700000000000"
                className="w-full h-full border-0 rounded-2xl"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Details */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">
                Contact Details
              </h3>
              <p className="text-slate-600">
                📍 123 Logistics Street, Colombo, Sri Lanka
              </p>
              <p className="text-slate-600">
                📧 info@cargologistics.com
              </p>
              <p className="text-slate-600">
                📞 +94 77 123 4567
              </p>
            </div>
          </div>

          {/* Right: Get Quote Form */}
          <form
            onSubmit={handleQuote}
            className="bg-slate-50 p-6 rounded-2xl shadow-md space-y-4"
          >
            <h3 className="text-xl font-semibold text-slate-900">
              Request a Quote
            </h3>

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Service */}
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Package Type</option>
              <option value="Air Freight">Air Freight</option>
              <option value="Ocean Freight">Ocean Freight</option>
              <option value="Land Transport">Land Transport</option>
              <option value="Express Courier">Express Courier</option>
              <option value="Warehousing">Warehousing</option>
              <option value="Door-to-Door Delivery">
                Door-to-Door Delivery
              </option>
            </select>

            {/* Quantity */}
            <input
              type="text"
              placeholder="Weight / Quantity (e.g. 10kg, 3 boxes)"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold shadow-lg transition"
            >
              💬 Send Quote via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
