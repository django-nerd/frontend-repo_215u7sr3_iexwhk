import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['Plan 20 posts/month', '1 brand', 'Basic analytics']
  },
  {
    name: 'Creator',
    price: '$19',
    badge: 'Popular',
    features: ['Plan 150 posts/month', '3 brands', 'Advanced analytics', 'Templates']
  },
  {
    name: 'Studio',
    price: '$49',
    features: ['Unlimited posts', '10 brands', 'Team collaboration', 'Priority support']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Simple pricing</h2>
          <p className="mt-3 text-neutral-400">Start free, upgrade when you’re ready.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-2xl border ${t.badge ? 'border-white/20' : 'border-white/10'} bg-white/[0.03] p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]`}
            >
              {t.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white border border-white/15">{t.badge}</span>
              )}
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <div className="mt-3 text-4xl font-semibold text-white">{t.price}<span className="text-base font-normal text-neutral-400">{t.price !== 'Free' ? '/mo' : ''}</span></div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-400">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-md ${t.badge ? 'bg-white text-neutral-900 hover:bg-neutral-200' : 'border border-white/10 text-white hover:bg-white/10'} px-4 py-3 font-medium`}>
                {t.price === 'Free' ? 'Get started' : 'Choose plan'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
