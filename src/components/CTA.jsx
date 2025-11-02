import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="pricing" className="relative bg-[#0B1020] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8"
          >
            <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
            <h3 className="text-2xl font-bold text-white">Simple, transparent pricing</h3>
            <p className="mt-2 text-white/70 max-w-md">
              Start free. Upgrade when you need priority routing, pro charts, and execution limits.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <div className="text-3xl font-extrabold text-white">$0</div>
                <div className="text-white/60">Starter</div>
                <ul className="mt-3 text-sm text-white/70 space-y-1">
                  <li>Realtime quotes</li>
                  <li>Basic charts</li>
                  <li>Community</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 ring-2 ring-cyan-400/40">
                <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300">$29</div>
                <div className="text-white/60">Pro</div>
                <ul className="mt-3 text-sm text-white/70 space-y-1">
                  <li>Pro indicators</li>
                  <li>Priority routing</li>
                  <li>Advanced alerts</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <div className="text-3xl font-extrabold text-white">$99</div>
                <div className="text-white/60">Elite</div>
                <ul className="mt-3 text-sm text-white/70 space-y-1">
                  <li>Institutional APIs</li>
                  <li>Custom models</li>
                  <li>White-glove support</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-blue-500/10 p-8"
          >
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <h3 className="text-2xl font-bold text-white">Start trading today</h3>
            <p className="mt-2 text-white/70 max-w-md">
              Create an account in minutes. Fund with your preferred currency and access markets 24/7.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 px-6 font-medium text-white shadow-lg shadow-blue-500/25 hover:opacity-95 transition-opacity">
                Create account
              </a>
              <a href="#" className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 text-white/90 backdrop-blur-md hover:text-white hover:border-white/40 transition-colors">
                View docs
              </a>
            </div>
            <div className="mt-6 text-xs text-white/60">
              By continuing you agree to our Terms & Privacy.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
