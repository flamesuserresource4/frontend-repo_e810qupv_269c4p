import { motion } from 'framer-motion'
import { Shield, Zap, LineChart, Cpu } from 'lucide-react'

const items = [
  {
    icon: LineChart,
    title: 'Deep Analytics',
    desc: 'Multi-timeframe charts, order flow heatmaps, and precision indicators built for pros.',
  },
  {
    icon: Zap,
    title: 'Lightning Execution',
    desc: 'Ultra-low latency routing with smart order execution across major venues.',
  },
  {
    icon: Shield,
    title: 'Bank-grade Security',
    desc: 'Hardware keys, biometric support, and MPC wallets protect your assets at rest and in motion.',
  },
  {
    icon: Cpu,
    title: 'AI Insights',
    desc: 'Signal detection, regime shifts, and portfolio nudges powered by on-device models.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0B1020] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for traders</h2>
          <p className="mt-3 text-white/60 max-w-2xl mx-auto">
            A minimalist, glass-morphic interface with the power you expect from a professional terminal.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 hover:border-white/25 transition-colors"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{f.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <button className="mt-4 text-sm text-cyan-300 group-hover:text-white transition-colors">Learn more →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
