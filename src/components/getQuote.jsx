import { useState } from "react";
import Navbar from "./navbar";

export default function GetQuote() {
  const whatsappNumber = "94771234567"; // without +

  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [quantity, setQuantity] = useState("");

  // Handle WhatsApp submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hi, I'm ${name}, I want to ship ${service} of ${quantity}.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");

    // Reset form (optional)
    setName("");
    setService("");
    setQuantity("");
  };

  return (
    <>
      <Navbar />

      {/* Page Heading */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            Request a Shipping Quote
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Submit your shipment details and connect with us instantly via
            WhatsApp.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-12 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-slate-50 p-6 rounded-2xl shadow-md"
          >
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Service */}
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Submit */}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              💬 Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
