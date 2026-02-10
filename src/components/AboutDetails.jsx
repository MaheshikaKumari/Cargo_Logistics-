import { useState } from "react";
import Navbar from "./navbar";

export default function AboutDetails() {
  const images = [
    "about.jpeg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpeg",
    "10.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Navbar />

      {/* Hero About Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 text-center">
            About Our Logistics
          </h1>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Trusted cargo company with 20+ years of experience delivering excellence in global shipping and supply chain solutions.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                We handle air, sea, and land transport with modern fleets, professional handling, and worldwide service coverage to ensure your shipments arrive safely and on time.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Our team of logistics experts ensures each shipment is handled with care. From customized freight solutions to secure storage, we provide end-to-end services that fit your business needs.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                We also focus on sustainability and efficiency, leveraging the latest technology to track, manage, and optimize every delivery worldwide.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Whether you’re a small business or a multinational, we guarantee reliable, timely, and professional logistics services that you can trust.
              </p>
            </div>

            {/* Right Content - Carousel */}
            <div className="relative">
              <img
                src={images[currentImage]}
                alt={`About Image ${currentImage + 1}`}
                className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105"
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white/90 text-gray-800 rounded-full p-2 shadow-md"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white/90 text-gray-800 rounded-full p-2 shadow-md"
              >
                ▶
              </button>

              {/* Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      idx === currentImage ? "bg-blue-900" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Highlights Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Modern Fleet", desc: "Large fleet of trucks, planes & vessels ready to deliver anywhere." },
              { title: "Global Coverage", desc: "We operate across continents to ensure timely delivery." },
              { title: "Professional Team", desc: "Expert handlers managing shipments with care & precision." },
              { title: "Real-Time Tracking", desc: "Stay informed with live updates on your cargo." },
              { title: "Custom Solutions", desc: "Tailored services to meet business-specific requirements." },
              { title: "Safety & Reliability", desc: "Packages are always handled securely & professionally." },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-2xl shadow-md hover:scale-105 transition text-center">
                <h3 className="font-semibold text-lg mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          Ready to Ship With Us?
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
          Contact us today to get a custom logistics solution for your business.
        </p>
        <a
          href="/contact"
          className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}
