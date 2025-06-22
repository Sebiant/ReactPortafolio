import BackgroundHeroSection from "./components/BackgroundHeroSection";
import AvatarOverlay from "./components/AvatarOverlay";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMeSection";
import Experience from "./components/ExperienceSection";
import Skills from "./components/SkillsSection";

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundHeroSection />
      <AvatarOverlay />
      <AboutMe />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
