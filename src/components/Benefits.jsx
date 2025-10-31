import {
  FaPlayCircle,
  FaTimes,
  FaBrain,
  FaExchangeAlt,
  FaSyncAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const youtubeVideoId = "F7Yq3T6ZSvI";

const benefits = [
  {
    icon: FaBrain,
    title: "Intelligent Matching",
    description:
      "Our AI-powered platform identifies and matches loads moving in opposite directions along a trucking corridor, creating a guaranteed backhaul for every outbound relay trip.",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
  },
  {
    icon: FaExchangeAlt,
    title: "The Relay Exchange",
    description:
      "Instead of a multi-day trip in one direction, a truck driver hauls one load the first half of their shift to a relay exchange node, where that driver swaps trailers with another driver hauling a load from the opposite direction. Each driver turns back the way they came for the second half of their shift, hauling their second trailer toward its destination and completing their shifts at their respective domiciles.",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    icon: FaSyncAlt,
    title: "Continuous Flow",
    description:
      'This process of "decoupling" the driver from the trailer ensures cargo is always moving toward its destination, while enabling tractor slip seating for drivers from the same domicile, effectively unlocking 10-13 Hours of Service (HOS) related idle time for new revenue.',
    gradient: "from-cyan-500 to-cyan-600",
    bgGradient: "from-cyan-50 to-cyan-100",
  },
];

export default function Benefits() {
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handlePlayVideo = () => {
    setShowModal(true);
  };

  return (
    <section id="benefits" className="py-24 px-6 font-roboto">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaBrain className="w-4 h-4" />
            AI-Powered Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              FR8relay
            </span>{" "}
            AI Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Conventional trucking creates billions of empty miles from
            single-direction long-haul trips. We see this as a massive
            opportunity to reclaim wasted human and machine resources.
            FR8relay's patented technology pools freight moving in complementary
            directions, turning long-haul loads into a series of continuous
            relay loops for your drivers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className="text-white text-2xl" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative group">
              <div className="relative h-[500px] w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500"></div>

                <div className="absolute inset-0">
                  <div className="absolute top-8 left-8 w-24 h-24 border border-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-16 right-12 w-16 h-16 border border-white/15 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute bottom-16 left-12 w-20 h-20 border border-white/10 rounded-full animate-pulse delay-2000"></div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 border border-white/25 rounded-full animate-pulse delay-500"></div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-8">
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                      <FaPlayCircle className="w-4 h-4" />
                      Demo
                    </span>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
                      See How It Works
                    </h3>
                  </div>

                  <div className="mb-8 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="logo.png"
                      alt="FR8relay logo"
                      className="h-16 md:h-20 w-auto mx-auto drop-shadow-2xl"
                    />
                  </div>

                  <p className="text-white/80 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                    Watch our AI-powered platform in action and discover how
                    we're revolutionizing long-haul trucking.
                  </p>
                </div>

                <button
                  className="absolute inset-0 flex items-center justify-center focus:outline-none z-20 group/play"
                  onClick={handlePlayVideo}
                  aria-label="Play Video"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl group-hover/play:shadow-3xl transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-white border border-white/50">
                      <svg
                        className="w-12 h-12 text-purple-600 group-hover/play:text-purple-700 transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-60 animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-bounce delay-2000"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-cyan-500 rounded-full opacity-60 animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-[90vw] max-w-4xl p-6 transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setShowModal(false)}
              aria-label="Close Video"
            >
              <FaTimes />
            </button>
            <div className="relative w-full h-[50vw] max-h-[70vh] rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title="FR8relay Demo Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
