import Hero from './components/Hero';
import HunterLicense from './components/HunterLicense';
import NenTypes from './components/NenTypes';
import CharacterRoster from './components/CharacterRoster';
import ArcGallery from './components/ArcGallery';
import NenQuiz from './components/NenQuiz';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-stone-950 min-h-screen text-stone-200 selection:bg-emerald-500/30 font-['Inter'] antialiased">
      <Hero />
      <HunterLicense />
      <NenTypes />
      <CharacterRoster />
      <ArcGallery />
      <NenQuiz />
      <Footer />
    </div>
  );
}

export default App;
