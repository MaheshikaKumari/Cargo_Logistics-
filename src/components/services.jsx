import Navbar from "./navbar";

export default function Services() {
  const services = [
    {
      title: "Air Freight",
      description: "Fast and reliable air cargo transport across the globe.",
      price: "Starting from Rs. 3,500 / kg",
      icon: "✈️",
    },
    {
      title: "Ocean Freight",
      description: "Cost-effective sea shipping for bulk and container cargo.",
      price: "Starting from Rs. 1,800 / kg",
      icon: "🚢",
    },
    {
      title: "Land Transport",
      description: "Safe and efficient trucking solutions for inland delivery.",
      price: "Starting from Rs. 900 / km",
      icon: "🚚",
    },
    {
      title: "Express Courier",
      description: "Quick delivery service for urgent parcels and documents.",
      price: "Starting from Rs. 2,500 / parcel",
      icon: "⚡",
    },
    {
      title: "Warehousing",
      description: "Secure storage with inventory and handling facilities.",
      price: "Starting from Rs. 15,000 / month",
      icon: "🏢",
    },
    {
      title: "Door-to-Door Delivery",
      description: "Complete pickup to final destination delivery service.",
      price: "Starting from Rs. 5,000",
      icon: "📦",
    },
    {
      title: "Custom Clearance",
      description: "Smooth and fast customs clearance with expert support.",
      price: "Starting from Rs. 7,500",
      icon: "🛃",
    },
    {
      title: "Track & Trace",
      description: "Real-time shipment tracking with live status updates.",
      price: "Free with every shipment",
      icon: "📍",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Page Heading */}
      <section className="relative pt-24 pb-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            Shipping Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our wide range of shipping categories designed to meet all
            logistics needs with transparent pricing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white">
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl px-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition hover:scale-105"
              >
                {/* Icon */}
                <div className="text-4xl mb-3">{service.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-3">
                  {service.description}
                </p>

                {/* Price */}
                <span className="mt-auto inline-block bg-blue-50 text-blue-900 text-sm font-semibold px-4 py-1 rounded-full">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
