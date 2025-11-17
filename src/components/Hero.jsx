import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      {/* Soft vignette and subtle noise for Pomelli vibe */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-neutral-900 via-neutral-900/80 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              Automate your social media with Kley
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg text-neutral-300"
            >
              Plan, schedule, and analyze posts across every network — powered by AI and inspired by the softness of Pomelli. Focus on creativity, let Kley handle the rest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#cta" className="inline-flex items-center rounded-md bg-white text-neutral-900 px-5 py-3 font-medium shadow/30 shadow-black/30 hover:bg-neutral-200 transition-colors">
                Start free trial
              </a>
              <a href="#features" className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-white font-medium hover:bg-white/10">
                See features
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-sm text-neutral-400"
            >
              No credit card required • Cancel anytime
            </motion.div>
          </div>

          <div className="relative h-[520px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
            <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
