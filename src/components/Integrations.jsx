import { motion } from 'framer-motion';

const brands = [
  'Instagram', 'TikTok', 'X', 'YouTube', 'LinkedIn', 'Facebook', 'Pinterest'
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Works everywhere you create</h2>
          <p className="mt-3 text-neutral-400">Seamless integrations with your favorite platforms.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {brands.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] py-6 text-neutral-300 text-sm font-medium"
            >
              {b}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
