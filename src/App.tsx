
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;