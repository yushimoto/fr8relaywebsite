import { useState, useEffect } from "react";

export default function RelayModelSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      title: "Reduce Shipping Time",
      description:
        "Trailer exchanges at relay nodes keep cargo moving instead of idling during driver roadside rest periods. Continuous movement cuts transport times by 20–50%, delivering faster and more reliable freight.",
      image: "/images/shipping.jpg",
    },
    {
      title: "Maximize Asset Utilization",
      description:
        "FR8relay's headhaul-backhaul pairing cuts out empty miles, while its truck and trailer swaps keep assets moving instead of idling during driver-related rest periods. Reaching the destination faster unlocks double the asset utilization and revenue potential.",
      image: "/images/maximize.jpg",
    },
    {
      title: "Promote Driver Well-Being",
      description:
        "FR8relay's routes and schedules get truck drivers home on a daily basis, reducing unpaid road time and long-haul fatigue. Happier, healthier drivers mean safer roads and better workforce retention.",
      image: "/images/driver.png",
    },
    {
      title: "Decarbonize the Supply Chain",
      description:
        "By eliminating 10-13 hours of HOS related truck idling and reducing empty miles, FR8relay lowers fuel waste and emissions. Together, we move freight more efficiently and more sustainably.",
      image: "/images/decarbon.jpeg",
    },
  ];

  return (
    <section id="platform" className="py-24 px-6 font-roboto">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Platform Benefits
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Benefits of using{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FR8relay
            </span>{" "}
            Platform
          </h2>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`group relative ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div
                    className={`relative ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative h-80 w-full rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {feature.title !== "Promote Driver Well-Being" && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </div>
                  </div>

                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="max-w-lg">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg mb-8">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
