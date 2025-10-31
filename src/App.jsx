// src/App.jsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import FeaturesSection from "./components/FeatureSection";
import ImpactMetricsSection from "./components/ImpactMetricSection";
import AboutUsCarousel from "./components/AboutUsCarousel";
import MediaMentions from "./components/MediaMentions";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Benefits />

      <FeaturesSection />

      {/* <ImpactMetricsSection /> */}
      {/* <AboutUsCarousel /> */}
      <MediaMentions />
      <TrustedBy />
      <ContactUsSection />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="FR8relayCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
}

export default App;
