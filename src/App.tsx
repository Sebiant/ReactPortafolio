import BackgroundHeader from "./components/BackgroundHeader";
import BackgroundBody from "./components/BackgroundBody";
import Footer from "./components/Footer";
import AvatarOverlay from "./components/AvatarOverlay";

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundHeader />
      <AvatarOverlay />
      <BackgroundBody />
      <Footer />
    </div>
  );
}

export default App;
