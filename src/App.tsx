import Background_header from './components/Background_header';
import Background_body from './components/Background_body';
import Background_footer from './components/Background_footer'
import Section from './components/Section';

import AvatarOverlay from './components/AvatarOverlay';

function App() {
  return (
    <div className="relative">
      <Background_header />
      <AvatarOverlay />
      <Background_body />
      <Section />
      <Background_body />
      <Background_footer />
    </div>
  );
}

export default App;
