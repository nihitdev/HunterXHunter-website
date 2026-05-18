import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-stone-950 border-t border-stone-800 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <h2 className="text-3xl font-black font-cinzel tracking-widest text-emerald-600 mb-6 drop-shadow-sm">
          H<span className="text-stone-700 mx-1">×</span>H
        </h2>
        
        <p className="text-stone-500 max-w-md mx-auto mb-8 text-sm leading-relaxed">
          A fan-made tribute to the masterpiece created by Yoshihiro Togashi. 
          Dedicated to all Hunters exploring the unknown.
        </p>
        
        <div className="flex gap-4 mb-10">
          <a href="#" className="p-3 bg-stone-900 rounded-full text-stone-400 hover:text-emerald-400 hover:bg-stone-800 transition-colors border border-stone-800">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-stone-900 rounded-full text-stone-400 hover:text-emerald-400 hover:bg-stone-800 transition-colors border border-stone-800">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
        
        <div className="pt-8 border-t border-stone-800/60 w-full flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 tracking-wider uppercase font-mono">
          <p>© {new Date().getFullYear()} Hunter's Archive.</p>
          <p className="mt-4 md:mt-0">Not affiliated with Shueisha or Madhouse.</p>
        </div>
      </div>
    </footer>
  );
}
