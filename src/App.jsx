import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0B1020] antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="bg-[#0B1020] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center text-white/50">
          © {new Date().getFullYear()} CinematicTrade — Design-first trading.
        </div>
      </footer>
    </div>
  )
}

export default App
