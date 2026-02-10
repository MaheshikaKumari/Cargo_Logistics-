import Navbar from "./navbar";

export default function Gallery() {
  const fleet = [
    
  { name: "Cargo Truck 1", img: "5.jpg" },
  { name: "Cargo Truck 2", img: "7.jpg" },
  { name: "Air Cargo Plane", img: "3.jpg" },
  { name: "Shipping Vessel", img: "6.jpg" },
  { name: "Delivery Van", img: "9.jpg" },
  { name: "Forklift / Warehouse", img: "1.jpg" },
   { name: "Forklift / Warehouse", img: "8.jpg" },
  { name: "Cargo Train", img: "10.jpg" },
  { name: "Container Yard", img: "2.jpg" },
 
];



  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            Fleet Gallery
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our fleet of trucks, planes, vessels, and warehouse equipment that ensures safe and timely delivery worldwide.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-12 bg-white">
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {fleet.map((vehicle) => (
              <div
                key={vehicle.name}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:scale-105"
              >
                <img
                  src={vehicle.img}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-slate-900">{vehicle.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
