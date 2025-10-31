export default function TrustedBy() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-50/30 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent"></div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-gray-200/50 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide font-roboto">
              Backed By
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-roboto">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-roboto">
            Supported by prestigious organizations and government agencies
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="overflow-hidden relative">
            <div className="animate-marquee-single whitespace-nowrap flex items-center gap-16 py-8">
              {[
                "USDA",
                "Bentonville Area COC",
                "Epicenter Logo",
                "Innova Logo",
                "Start Co",
                "NSF",
                "Arkansas Inc",
                "StartupJunkie",
                "Us Department of Energy",
              ].map((name, idx) => (
                <div
                  key={`first-${idx}`}
                  className="group relative flex-shrink-0"
                >
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200/50">
                    <img
                      src={`/logos/${name}.png`}
                      alt={`${name} logo`}
                      className="h-12 md:h-14 object-contain"
                    />
                  </div>

                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}

              {[
                "USDA",
                "Bentonville Area COC",
                "Epicenter Logo",
                "Innova Logo",
                "Start Co",
                "NSF",
                "Arkansas Inc",
                "StartupJunkie",
                "Us Department of Energy",
              ].map((name, idx) => (
                <div
                  key={`second-${idx}`}
                  className="group relative flex-shrink-0"
                >
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200/50">
                    <img
                      src={`/logos/${name}.png`}
                      alt={`${name} logo`}
                      className="h-12 md:h-14 object-contain"
                    />
                  </div>

                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
