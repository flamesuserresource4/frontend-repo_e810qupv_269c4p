import { motion } from 'framer-motion'
import { Rocket, LineChart, Shield } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-3 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 flex items-center justify-center shadow-inner">
              <LineChart className="h-5 w-5 text-white" />
            </div>
            <span className="text-white/90 font-semibold tracking-wide">
              CinematicTrade
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#security" className="hover:text-white transition-colors flex items-center gap-2">
              <Shield className="h-4 w-4" /> Security
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex h-10 px-4 rounded-xl border border-white/25 text-white/80 hover:text-white hover:border-white/40 transition-colors">Sign in</button>
            <button className="inline-flex h-10 px-4 rounded-xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/25 hover:opacity-95 transition-opacity">
              <Rocket className="h-4 w-4 mr-2" /> Launch App
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
