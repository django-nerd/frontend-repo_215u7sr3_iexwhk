import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-blue-50 via-fuchsia-50 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900"
            >
              Automate your social media with Kley
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg text-slate-600"
            >
              Plan, schedule, and analyze posts across every network — powered by AI and inspired by the simplicity of Pomelli. Focus on creativity, let Kley handle the rest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#cta" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800">
                Start free trial
              </a>
              <a href="#features" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-slate-800 font-medium hover:bg-slate-50">
                See features
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-sm text-slate-500"
            >
              No credit card required • Cancel anytime
            </motion.div>
          </div>

          <div className="relative h-[520px] rounded-2xl border border-slate-200/60 bg-white/60 backdrop-blur overflow-hidden shadow-[0_10px_40px_-10px_rgba(16,24,40,0.2)]">
            <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
