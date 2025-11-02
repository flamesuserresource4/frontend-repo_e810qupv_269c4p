import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0B1020]">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-[42rem] bg-gradient-to-t from-blue-500/20 to-transparent blur-3xl" />
      </div>

      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live markets — ultra-low latency
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Trade with a cinematic edge
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/70">
              A modern platform for digital assets — glass-morphic design, realtime analytics, and the smoothest execution experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 px-6 font-medium text-white shadow-lg shadow-blue-500/25 hover:opacity-95 transition-opacity">
                Get started
              </a>
              <a href="#features" className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 text-white/90 backdrop-blur-md hover:text-white hover:border-white/40 transition-colors">
                Explore features
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay to enhance contrast over scene (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_20%_10%,rgba(11,16,32,0)_0%,rgba(11,16,32,0.6)_60%,#0B1020_100%)]" />
    </section>
  )
}
