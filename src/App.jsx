import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 selection:bg-fuchsia-500/30 selection:text-white">
      {/* Pomelli-inspired soft glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-48 -right-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-neutral-800 py-10 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Kley. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
