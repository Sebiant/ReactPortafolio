import BackgroundHeader from './components/BackgroundHeader';
import NavBar from './components/NavBar';
import BackgroundBody from './components/BackgroundBody';
import Footer from './components/Footer'

import AvatarOverlay from './components/AvatarOverlay';

function App() {
  return (
    <div className="relative">
      <NavBar />
      <BackgroundHeader />
      <AvatarOverlay />
      <BackgroundBody />
      <Footer />

    </div>
  );
}

export default App;
