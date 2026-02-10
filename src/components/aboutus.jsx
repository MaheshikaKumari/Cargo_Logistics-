import { Link } from "react-router-dom";


export default function AboutSection() {
  return (
    <section
      className="relative flex items-center justify-center py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white min-h-[calc(100vh-64px)]"
      style={{ paddingTop: "calc(64px + 3rem)" }} // Adjust for fixed navbar height
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              About Our Logistics
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Trusted cargo company with over 20 years of experience delivering
              excellence in global shipping and supply chain solutions.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We handle air, sea, and land transport with modern fleets,
              professional handling, and worldwide service coverage to ensure
              your shipments arrive safely and on time.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                "Large Modern Fleet",
                "Fast & Safe Delivery",
                "Worldwide Service Coverage",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                    ✓
                  </span>
                  <p className="text-slate-700 text-sm sm:text-base">{feature}</p>
                </div>
              ))}
            </div>

            <Link to="/about-details"className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">
             Learn More
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl blur-xl opacity-60" />

            <img
              src="/about.jpeg"
              alt="Logistics trucks"
              className="relative rounded-3xl shadow-2xl w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
