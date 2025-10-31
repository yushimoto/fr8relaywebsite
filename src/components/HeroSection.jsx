import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden font-roboto">
      <video
        className="absolute w-full h-full object-cover scale-105"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: "brightness(0.7) contrast(1.1)" }}
      >
        <source src="/file.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/12 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
        <div
          className={`text-center max-w-5xl transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tight font-bold font-roboto">
              <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent animate-pulse mb-4">
                FR8relay
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/90 leading-relaxed font-roboto">
                Revolutionizing Long-Haul Trucking with{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent font-bold">
                  AI
                </span>
              </span>
            </h1>
          </div>

          <div className="mb-10">
            <p className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-3xl mx-auto leading-relaxed font-light font-roboto">
              Our AI-powered relay platform gets drivers home sooner, maximizes
              asset use, and gets freight delivered faster. We're driving
              innovation for impact and building smarter solutions for a more
              sustainable and resilient supply chain and a stronger, more
              supported workforce.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-base font-bold font-roboto rounded-full shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-sm mb-2 font-light font-roboto">
            Scroll to explore
          </span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
