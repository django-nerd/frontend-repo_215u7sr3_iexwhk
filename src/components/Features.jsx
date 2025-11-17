import { motion } from 'framer-motion';
import { Calendar, Sparkles, BarChart3, Share2 } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'AI-assisted planning',
    desc: 'Generate content calendars, captions, and best-time suggestions tailored to your audience.'
  },
  {
    icon: Share2,
    title: 'One-click publishing',
    desc: 'Post to Instagram, TikTok, X, LinkedIn and more simultaneously with auto-formatting.'
  },
  {
    icon: BarChart3,
    title: 'Deep analytics',
    desc: 'Track performance and get actionable insights to grow faster across platforms.'
  },
  {
    icon: Sparkles,
    title: 'Templates & snippets',
    desc: 'Save your best hooks, hashtags, and layouts for drag-and-drop workflows.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Everything you need to ship content daily</h2>
          <p className="mt-3 text-slate-600">From idea to publish to insights — Kley streamlines your entire social workflow.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-slate-200 p-6 bg-white/70 backdrop-blur hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-fuchsia-500 to-rose-500 text-white shadow">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
