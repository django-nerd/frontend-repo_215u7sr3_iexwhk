import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-neutral-950/50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-sky-400 via-fuchsia-500 to-rose-400 text-white shadow-sm">
              <Sparkles size={18} />
            </span>
            <span className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">Kley</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#integrations" className="hover:text-white transition-colors">Integrations</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-neutral-300 hover:text-white text-sm">Sign in</a>
            <a href="#cta" className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-white/20 transition-colors border border-white/10">Get started</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-neutral-200 hover:bg-white/5">
            <Menu size={18} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 text-sm text-neutral-200">
              <a href="#features" className="py-2">Features</a>
              <a href="#integrations" className="py-2">Integrations</a>
              <a href="#pricing" className="py-2">Pricing</a>
              <a href="#cta" className="mt-2 inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 font-medium text-white border border-white/10">Get started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
