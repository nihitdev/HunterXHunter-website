import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShieldAlert, Fingerprint } from 'lucide-react';

export default function HunterLicense() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-32 px-6 bg-stone-950 relative border-t border-stone-800/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.05)_0,transparent_100%)]" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Text Side */}
        <div className="flex-1 md:pr-12 space-y-6">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-stone-100 mb-4">
            The <span className="text-emerald-500">Hunter</span> License
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            A card identifying an individual as a professional Hunter. It grants access to 90% of restricted countries, free use of 95% of public facilities, and an unimaginably high line of credit. 
          </p>
          <p className="text-stone-400 text-lg leading-relaxed border-l-2 border-emerald-500/50 pl-4 italic">
            Over 20% of Hunters lose their license within the first year. It cannot be replaced.
          </p>
        </div>

        {/* 3D Card Side */}
        <div className="flex-1 flex justify-center perspective-[2000px]">
          <motion.div
            className="w-full max-w-[400px] h-[250px] cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front of Card */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-xl shadow-[0_20px_50px_rgba(16,185,129,0.3)] border-2 border-emerald-300/50 flex flex-col items-center justify-between p-6"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="w-full flex justify-between items-start">
                <div className="flex gap-2">
                  <ShieldAlert className="w-8 h-8 text-white/90" />
                  <div className="flex flex-col">
                    <span className="text-white/80 text-[10px] uppercase font-bold tracking-widest leading-none">Double Star</span>
                    <span className="text-white font-bold text-sm tracking-widest">HUNTER</span>
                  </div>
                </div>
                <div className="w-12 h-16 bg-white/20 rounded-md border border-white/30 backdrop-blur-sm" />
              </div>

              {/* Fake Hunter Language / Barcode */}
              <div className="w-full space-y-2 mt-8">
                <div className="h-4 bg-white/20 rounded w-full flex gap-1 overflow-hidden opacity-50">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="h-full bg-white flex-1" style={{ opacity: Math.random() }} />
                  ))}
                </div>
                <div className="flex justify-between text-white/90 font-mono text-sm tracking-[0.2em]">
                  <span>1098</span>
                  <span>4732</span>
                  <span>8810</span>
                  <span>9993</span>
                </div>
              </div>
            </div>

            {/* Back of Card */}
            <div 
              className="absolute inset-0 bg-stone-900 rounded-xl shadow-2xl border-2 border-stone-700 flex flex-col p-6"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className="w-full h-12 bg-black mb-6 -mx-6 px-6 relative" style={{ width: 'calc(100% + 48px)' }}></div>
              <div className="flex-1 flex gap-6">
                <div className="flex-1 border border-stone-700 rounded bg-stone-800/50 flex items-center justify-center relative overflow-hidden">
                  <Fingerprint className="w-16 h-16 text-emerald-500/20" />
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent" />
                </div>
                <div className="flex-[2] flex flex-col justify-end text-xs text-stone-500 space-y-1 font-mono">
                  <p className="border-b border-stone-800 pb-1 uppercase tracking-wider">Property of Hunter Assoc.</p>
                  <p>Do not bend or expose to magnetic fields.</p>
                  <p>Found cards must be returned to HA HQ.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
