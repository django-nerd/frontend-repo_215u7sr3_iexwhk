import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-500 via-fuchsia-500 to-rose-500">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_10%,white,transparent_40%),radial-gradient(circle_at_80%_50%,white,transparent_35%)]" />
          <div className="relative p-10 sm:p-14 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-semibold text-white"
            >
              Be consistent without burning out
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-white/90"
            >
              Join creators and teams who plan, publish, and grow with Kley.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <input type="email" placeholder="Work email" className="w-full sm:w-80 rounded-md border border-white/40 bg-white/20 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" />
              <button className="inline-flex items-center rounded-md bg-white px-5 py-3 font-medium text-slate-900 hover:bg-white/90">Get early access</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
