import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaNewspaper,
  FaPlay,
  FaMicrophone,
  FaBroadcastTower,
} from "react-icons/fa";

const mediaMentions = [
  {
    id: 1,
    title: "Revolutionizing the Trucking Industry",
    source: "Bentonville Area Chamber of Commerce",
    type: "video",
    secondaryType: "podcast",
    link: "https://youtube.com/watch?v=DJ4Xpe3r9fo&embeds_referring_euri=https%3A%2F%2Fbentonvillearea.com%2F&embeds_referring_origin=https%3A%2F%2Fbentonvillearea.com&source_ve_path=NzY3NTg",
    image: "/images/slide2.png",
    date: "2024",
    excerpt:
      "FR8relay's innovative approach to trucking logistics and their impact on the industry.",
  },
  {
    id: 2,
    title: "Aayush/FR8relay Interview",
    source: "KUAF",
    type: "radio",
    link: "https://www.kuaf.com/show/ozarks-at-large/2024-08-29/fr8relay-on-the-future-of-trucking-logistics-sector-in-arkansas",
    image: "/images/slide1.png",
    date: "2024",
    excerpt:
      "KUAF radio interview discussing the future of trucking logistics in Arkansas.",
  },
  {
    id: 3,
    title: "Federal Funding Tops $1 Million for FR8relay",
    source: "Talk Business & Politics",
    type: "article",
    link: "https://talkbusiness.net/2022/10/federal-funding-tops-1-million-for-fr8relay/",
    image: "/images/slide4.png",
    date: "2022",
    excerpt:
      "Major federal funding milestone supporting FR8relay's innovative transportation solutions.",
  },
  {
    id: 4,
    title: "Aayush/Deme/FR8relay Interview",
    source: "I Am Northwest Arkansas",
    type: "podcast",
    link: "https://iamnorthwestarkansas.com/revolutionizing-trucking-with-fr8relays-innovative-network-model/",
    image: "/images/slide3.png",
    date: "2024",
    excerpt:
      "Northwest Arkansas podcast features FR8relay's innovative network model.",
  },
  {
    id: 5,
    title: "FR8relay Interview (Aayush/Deme)",
    source: "Northwest Arkansas Council",
    type: "video",
    link: "https://www.youtube.com/watch?v=tVuv9EXYGes",
    image: "/images/slide1.png",
    date: "2025",
    excerpt:
      "Northwest Arkansas Council video interview with FR8relay founders.",
  },
  {
    id: 6,
    title: "$1M NSF Phase 2",
    source: "Arkansas Business",
    type: "article",
    link: "https://www.arkansasbusiness.com/article/fr8relay-gets-1m-grant-from-national-science-foundation/",
    image: "/images/slide4.png",
    date: "2024",
    excerpt:
      "Arkansas Business reports on FR8relay's $1M NSF Phase 2 grant achievement.",
  },
  {
    id: 7,
    title: "Efficient Trucking Logistics Ecosystem in Arkansas",
    source: "Startup Junkie",
    type: "video",
    link: "https://youtube.com/watch?v=L2FWSRqLvkE&embeds_referring_euri=https%3A%2F%2Fstartupjunkie.org%2F2023-7-10-349-efficient-trucking-logistics-ecosystem-in-arkansas-with-fr8relay%2F&source_ve_path=Mjg2NjY",
    image: "/images/slide3.png",
    date: "2023",
    excerpt:
      "FR8relay's role in building a sustainable logistics ecosystem in Arkansas.",
  },
  {
    id: 8,
    title: "Aayush/FR8relay Interview",
    source: "Startup Junkie",
    type: "podcast",
    link: "https://startupjunkie.org/2023-7-10-349-efficient-trucking-logistics-ecosystem-in-arkansas-with-fr8relay/",
    image: "/images/slide3.png",
    date: "2023",
    excerpt:
      "In-depth podcast interview discussing FR8relay's logistics ecosystem in Arkansas.",
  },
  {
    id: 9,
    title: "$200,000 USDA Grant",
    source: "AR Money and Politics",
    type: "article",
    link: "https://armoneyandpolitics.com/doe-grant-fr8relay/",
    image: "/images/slide1.png",
    date: "2022",
    excerpt:
      "FR8relay receives significant USDA funding to advance their innovative trucking solutions.",
  },
  {
    id: 10,
    title: "FR8relay Interview (Aayush/Deme)",
    source: "Bentonville Beacon Podcast",
    type: "podcast",
    link: "https://www.youtube.com/watch?v=DJ4Xpe3r9fo",
    image: "/images/slide4.png",
    date: "2023",
    excerpt:
      "Bentonville Beacon features FR8relay founders discussing their innovative approach.",
  },
  {
    id: 11,
    title: "$650,000 USDA Phase II",
    source: "Landline Media",
    type: "article",
    link: "https://landline.media/logistics-startup-fr8relay-gets-grant-for-drop-and-hook-project/",
    image: "/images/slide2.png",
    date: "2022",
    excerpt:
      "Major USDA Phase II funding supports FR8relay's drop-and-hook project development.",
  },
  {
    id: 12,
    title: "DoD Phase I Proposal",
    source: "Talk Business",
    type: "article",
    link: "https://talkbusiness.net/2023/09/bentonville-startup-fr8relay-pitches-logistics-tech-to-dod-officials/",
    image: "/images/slide1.png",
    date: "2023",
    excerpt:
      "FR8relay pitches logistics technology to Department of Defense officials.",
  },
  {
    id: 13,
    title: "Deme/FR8relay Interview",
    source: "The TrustBuilt Podcast",
    type: "podcast",
    link: "https://www.youtube.com/watch?v=NlMzQT3aPow",
    image: "/images/slide3.png",
    date: "2025",
    excerpt:
      "The TrustBuilt Podcast features Deme discussing FR8relay's mission and impact.",
  },
  {
    id: 14,
    title: "$100,000 USDA Grant",
    source: "5 News",
    type: "article",
    link: "https://www.5newsonline.com/article/money/business/fr8relay-100k-grant-testing-relay-trucking-system/527-8bf6ad0c-d26c-4518-bb98-14edfabb3de5",
    image: "/images/slide2.png",
    date: "2024",
    excerpt:
      "5 News covers FR8relay's USDA grant for testing relay trucking system.",
  },
  {
    id: 15,
    title: "$650,000 USDA Phase II",
    source: "The Trucker",
    type: "article",
    link: "https://www.thetrucker.com/trucking-news/equipment-tech/usda-awards-649998-grant-to-fr8relay",
    image: "/images/slide3.png",
    date: "2022",
    excerpt:
      "USDA awards substantial grant to FR8relay for advancing trucking technology.",
  },
  {
    id: 16,
    title: "Profile of a Founder: Deme Interview",
    source: "The Tech Tribune",
    type: "article",
    link: "https://thetechtribune.com/deme-yuan-of-fr8relay/",
    image: "/images/slide2.png",
    date: "2025",
    excerpt:
      "The Tech Tribune profiles FR8relay founder Deme Yuan in detailed interview.",
  },
  {
    id: 17,
    title: "$650,000 USDA Phase II",
    source: "Truck Drivers USA",
    type: "article",
    link: "https://truckdriversus.com/usda-awards-649998-grant-to-fr8relay/",
    image: "/images/slide4.png",
    date: "2022",
    excerpt:
      "Trucking industry coverage of FR8relay's significant USDA funding achievement.",
  },
  {
    id: 18,
    title: "$1M NSF Phase 2",
    source: "LeadsOnTrees",
    type: "article",
    link: "https://www.leadsontrees.com/news/fr8relay-secures-1-million-in-grants-to-revolutionize-trucking-logistics",
    image: "/images/slide2.png",
    date: "2024",
    excerpt:
      "LeadsOnTrees covers FR8relay's $1M grant to revolutionize trucking logistics.",
  },
  {
    id: 19,
    title: "$650,000 USDA Phase II",
    source: "ASBTDC",
    type: "article",
    link: "https://asbtdc.org/fr8relay-earns-usda-funding-to-launch-pilot-study-of-relay-trucking-model/",
    image: "/images/slide1.png",
    date: "2022",
    excerpt:
      "ASBTDC highlights FR8relay's USDA funding for relay trucking model pilot study.",
  },
  {
    id: 20,
    title: "$1M NSF Phase 2 (Deme Q&A)",
    source: "Startup NWA",
    type: "article",
    link: "https://startupnwa.com/innovation-in-motion-the-1m-non-dilutive-funding-journey-of-fr8relay/",
    image: "/images/slide3.png",
    date: "2024",
    excerpt:
      "Startup NWA features Deme's Q&A about FR8relay's $1M non-dilutive funding journey.",
  },
  {
    id: 21,
    title: "$200,000 USDA Grant",
    source: "Startup Junkie",
    type: "article",
    link: "https://startupjunkie.org/2022-10-24-fr8relay-awarded-256k-from-national-science-foundation/",
    image: "/images/slide2.png",
    date: "2022",
    excerpt:
      "Startup Junkie covers FR8relay's NSF funding for innovative logistics solutions.",
  },
  {
    id: 22,
    title: "$1M NSF Phase 2",
    source: "ASBTDC",
    type: "article",
    link: "https://sbtdc.uark.edu/fr8relay-receives-1m-sbir-grant/",
    image: "/images/slide4.png",
    date: "2024",
    excerpt:
      "ASBTDC announces FR8relay's $1M SBIR grant from National Science Foundation.",
  },
  {
    id: 23,
    title: "Driving Innovation: FR8relay Accelerates in Transportation",
    source: "AR Money & Politics",
    type: "article",
    link: "#",
    image: "/images/slide1.png",
    date: "2024",
    excerpt:
      "How FR8relay is transforming the transportation industry with cutting-edge technology.",
  },
];

const getTypeIcon = (type) => {
  switch (type) {
    case "podcast":
      return <FaMicrophone className="text-blue-600" />;
    case "video":
      return <FaPlay className="text-red-600" />;
    case "radio":
      return <FaBroadcastTower className="text-purple-600" />;
    case "article":
    default:
      return <FaNewspaper className="text-green-600" />;
  }
};

const getTypeColor = (type) => {
  switch (type) {
    case "podcast":
      return "bg-blue-100 text-blue-800";
    case "video":
      return "bg-red-100 text-red-800";
    case "radio":
      return "bg-purple-100 text-purple-800";
    case "article":
    default:
      return "bg-green-100 text-green-800";
  }
};

const getYouTubeThumbnail = (url) => {
  const videoId = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
  );
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId[1]}/maxresdefault.jpg`;
  }
  return null;
};

const getMediaImage = (mention) => {
  if (mention.type === "video" && mention.link.includes("youtube.com")) {
    const thumbnail = getYouTubeThumbnail(mention.link);
    if (thumbnail) return thumbnail;
  }

  if (mention.type === "podcast") {
    return `https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop&crop=center`;
  }

  if (mention.type === "radio") {
    return `https://npr.brightspotcdn.com/dims4/default/f0de2a1/2147483647/strip/true/crop/1340x756+0+0/resize/1760x992!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F0d%2F82%2F50eff5f24eddbd11ba07fa2e1f73%2Fnwabjnew-grove.png`;
  }

  if (mention.type === "article") {
    return `https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop&crop=center`;
  }
  return mention.image;
};

export default function MediaMentions() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const categories = [
    { id: "all", name: "All Media" },
    { id: "article", name: "Articles" },
    { id: "podcast", name: "Podcasts" },
    { id: "video", name: "Videos" },
    { id: "radio", name: "Radio" },
  ];

  const itemsPerPage = 6;

  const filteredMentions = mediaMentions.filter((mention) => {
    const matchesCategory =
      selectedCategory === "all" || mention.type === selectedCategory;
    const matchesSearch =
      mention.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mention.source.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredMentions.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMentions = filteredMentions.slice(startIndex, endIndex);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(0);
  };

  return (
    <section id="media" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 rounded-full mb-8">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Media Coverage
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-roboto">
            In the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Media
            </span>
          </h2>

          <p className="max-w-4xl mx-auto text-xl text-gray-600 leading-relaxed font-roboto">
            Discover how FR8relay is making waves in the transportation
            Industry.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 font-roboto ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-200 transform scale-105"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-200/50 hover:border-purple-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMentions.map((mention, index) => (
              <div
                key={mention.id}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:border-purple-200/50 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-56">
                  <a
                    href={mention.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative z-10"
                  >
                    <img
                      src={getMediaImage(mention)}
                      alt={mention.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                      onError={(e) => {
                        e.target.src = mention.image;
                      }}
                    />
                  </a>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4 flex gap-2 z-20">
                    <a
                      href={mention.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${getTypeColor(
                        mention.type
                      )} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                    >
                      {mention.type}
                    </a>
                    {mention.secondaryType && (
                      <a
                        href={mention.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${getTypeColor(
                          mention.secondaryType
                        )} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                      >
                        {mention.secondaryType}
                      </a>
                    )}
                  </div>

                  {mention.type === "video" && (
                    <a
                      href={mention.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center z-20"
                    >
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <FaPlay className="text-purple-600 ml-1" />
                      </div>
                    </a>
                  )}
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {getTypeIcon(mention.type)}
                    <span className="text-sm text-gray-500 font-medium font-roboto">
                      {mention.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-700 transition-colors duration-300 font-roboto">
                    {mention.title}
                  </h3>

                  <p className="text-base text-gray-600 mb-4 font-semibold font-roboto">
                    {mention.source}
                  </p>

                  <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed font-roboto">
                    {mention.excerpt}
                  </p>

                  <a
                    href={mention.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-base group/link transition-colors duration-300 font-roboto"
                  >
                    {mention.type === "video" ? "Watch Now" : "Read More"}
                    <FaExternalLinkAlt className="text-sm group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                <div className="absolute top-4 left-4 w-2 h-2 bg-purple-200 rounded-full group-hover:bg-purple-400 transition-colors duration-300"></div>
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-blue-200 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200/50">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentPage === index
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 scale-125 shadow-lg"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-indigo-600/5 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 rounded-3xl backdrop-blur-sm"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>

            <div className="relative z-10 p-12">
              <div className="max-w-5xl mx-auto text-center">
                <div className="mb-12">
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-roboto">
                    Pioneering the Future of
                    <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Transportation Logistics
                    </span>
                  </h3>
                </div>

                <div className="space-y-8">
                  <p className="text-xl text-gray-700 leading-relaxed font-roboto font-light max-w-4xl mx-auto">
                    FR8relay is an Arkansas-based technology company that
                    envisions a more efficient, profitable, equitable, and
                    sustainable trucking logistics ecosystem.
                  </p>

                  <div className="flex flex-wrap justify-center gap-8 mt-12">
                    <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-gray-200/50 shadow-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">🏆</span>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900 font-roboto">
                          SBIR Awards
                        </p>
                        <p className="text-xs text-gray-600 font-roboto">
                          USDA • DOE • NSF
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-4 rounded-2xl border border-gray-200/50 shadow-sm">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">🚀</span>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-gray-900 font-roboto">
                          Fuel Accelerator
                        </p>
                        <p className="text-xs text-gray-600 font-roboto">
                          ML Startups Alumni
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
