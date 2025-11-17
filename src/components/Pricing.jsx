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
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Start free, upgrade when you’re ready.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-2xl border ${t.badge ? 'border-slate-900' : 'border-slate-200'} bg-white/70 p-6 shadow-sm`}
            >
              {t.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-slate-900 px-2 py-1 text-xs font-medium text-white">{t.badge}</span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
              <div className="mt-3 text-4xl font-semibold text-slate-900">{t.price}<span className="text-base font-normal text-slate-500">{t.price !== 'Free' ? '/mo' : ''}</span></div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-md ${t.badge ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border border-slate-300 text-slate-800 hover:bg-slate-50'} px-4 py-3 font-medium`}>
                {t.price === 'Free' ? 'Get started' : 'Choose plan'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
