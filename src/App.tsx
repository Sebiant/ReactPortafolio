import BackgroundHeroSection from "./components/BackgroundHeroSection";
import Footer from "./components/Footer";
import AvatarOverlay from "./components/AvatarOverlay";
import SplitSections from "./components/SplitSections";

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundHeroSection />
      <AvatarOverlay />
      <SplitSections />
      <Footer />
    </div>
  );
}

export default App;
