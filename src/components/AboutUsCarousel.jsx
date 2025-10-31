import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "/images/slide2.png",
    link: "https://bentonvillearea.com/podcast/revolutionizing-the-trucking-industry-with-aayush-thakur-and-deme-yuan-of-fr8relay/",
  },
  {
    image: "/images/slide1.png",
    link: "https://armoneyandpolitics.com/driving-innovation-fr8relay-accelerates-in-the-transportation-industry/",
  },
  {
    image: "/images/slide3.png",
    link: "https://startupjunkie.org/2023-7-10-349-efficient-trucking-logistics-ecosystem-in-arkansas-with-fr8relay/",
  },
  {
    image: "/images/slide4.png",
    link: "https://talkbusiness.net/2022/10/federal-funding-tops-1-million-for-fr8relay/",
  },
];

export default function AboutUsCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  return (
    <section id="about" className="bg-[#fff] text-black py-16 px-6 font-roboto">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-light pl-10 mb-2 text-gray-900">
          About FR8relay
        </h2>
        <p className="text-md md:text-l font-light leading-relaxed text-black pl-10 mb-2 mb-10 max-w-7xl">
          FR8relay connects shippers, carriers, and drivers through our patented
          relay system. By intelligently matching trucks every 4–5 hours, we
          enable drivers to swap trailers, reduce idle time, and get home daily
          Improving delivery times and asset utilization for everyone on the
          road.
        </p>

        {/* Featured Media Preview */}

        <div className="relative flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="text-gray-300 hover:text-black text-xl md:text-3xl"
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>

          {/* Slides */}
          <div className="flex flex-grow gap-4 overflow-hidden">
            {/* First (70%) */}
            <a
              href={slides[current].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[0.6] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={slides[current].image}
                alt={`Slide ${current}`}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </a>

            {/* Second (30%) */}
            <a
              href={slides[(current + 1) % slides.length].link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[0.4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={slides[(current + 1) % slides.length].image}
                alt={`Slide ${(current + 1) % slides.length}`}
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </a>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="text-gray-300 hover:text-black text-xl md:text-3xl"
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Description */}
        <div className="mt-10 ml-10 max-w-7xl text-sm md:text-base leading-relaxed">
          <p>
            FR8relay is an Arkansas-based technology company that envisions a
            more efficient, profitable, equitable, and sustainable trucking
            logistics ecosystem. We are proud to be a recipient of Small
            Business Innovative Research awards from the U.S. Department of
            Agriculture, U.S. Department of Energy, and the National Science
            Foundation. We are an alum of the Fuel Accelerator Program for
            machine learning startups.
          </p>
        </div>
      </div>
    </section>
  );
}
