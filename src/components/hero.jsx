import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(hero.jpeg",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-900/70 to-blue-800/60" />
          
      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Global Logistics
              <span className="text-orange-300 italic"> Simplified</span>
            </h1>

            <p className="text-sm sm:text-base text-white/90 mb-8">
              Reliable Transport Solutions Across Air, Sea & Land. Fast,
              secure, and worldwide delivery services tailored for your
              business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote"className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">
               Get a Quote
              </Link>
              <Link to="/about-details" className="border border-white/40 bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-lg font-semibold">
               Learn More
              </Link>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}