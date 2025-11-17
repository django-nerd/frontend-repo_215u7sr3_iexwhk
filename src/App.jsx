import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Kley. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
