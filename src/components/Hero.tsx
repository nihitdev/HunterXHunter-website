import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-stone-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0,rgba(28,25,23,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hunter_%C3%97_Hunter_logo.svg/1024px-Hunter_%C3%97_Hunter_logo.svg.png" 
            alt="Hunter x Hunter Logo" 
            className="w-full max-w-md mx-auto drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] invert brightness-0 sepia hue-rotate-[130deg] saturate-200"
            // Using CSS filters to turn the black logo into a glowing emerald tone, or just rely on a pure white one if we had it.
            // Let's use text instead to be safe and crisp.
            style={{ display: 'none' }} 
          />
          <h1 className="text-6xl md:text-8xl font-black font-cinzel tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-emerald-500 to-teal-800 drop-shadow-sm">
            HUNTER <span className="text-stone-700 mx-2 text-4xl align-middle">×</span> HUNTER
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-stone-400 font-light max-w-2xl mx-auto italic border-l-2 border-emerald-500 pl-4 text-left"
        >
          "You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want."
          <span className="block mt-2 text-sm text-emerald-500 font-semibold not-italic tracking-widest uppercase">— Ging Freecss</span>
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-stone-500"
      >
        <span className="text-xs uppercase tracking-[0.3em] mb-2 font-bold">Discover</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-emerald-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
