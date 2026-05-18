import { motion } from 'framer-motion';

const characters = [
  {
    name: 'Gon Freecss',
    title: 'Enhancer',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=400&q=80',
    color: 'text-emerald-400 border-emerald-500/30',
    quote: '"If you want to get to know someone, find out what makes them angry."',
  },
  {
    name: 'Killua Zoldyck',
    title: 'Transmuter',
    image: 'https://images.unsplash.com/photo-1620822607172-8ee4e7ce29cc?auto=format&fit=crop&w=400&q=80',
    color: 'text-purple-400 border-purple-500/30',
    quote: '"Friends are supposed to help each other out."',
  },
  {
    name: 'Kurapika',
    title: 'Conjurer',
    image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=400&q=80',
    color: 'text-orange-400 border-orange-500/30',
    quote: '"I do not fear death. I fear only that my rage will fade over time."',
  },
  {
    name: 'Leorio Paradinight',
    title: 'Emitter',
    image: 'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=400&q=80',
    color: 'text-yellow-400 border-yellow-500/30',
    quote: '"Money can get you anything! Even dreams!"',
  },
  {
    name: 'Hisoka Morow',
    title: 'Transmuter',
    image: 'https://images.unsplash.com/photo-1533158388470-9a56699990c6?auto=format&fit=crop&w=400&q=80',
    color: 'text-pink-400 border-pink-500/30',
    quote: '"Right now, I\'m letting you live. And I\'ll continue to keep you alive... until you\'ve grown enough to become worth killing."',
  },
  {
    name: 'Chrollo Lucilfer',
    title: 'Specialist',
    image: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?auto=format&fit=crop&w=400&q=80',
    color: 'text-blue-400 border-blue-500/30',
    quote: '"I believe that we have a soul. That\'s why I want to fulfill my dead friend\'s wish... to wreak havoc."',
  },
];

export default function CharacterRoster() {
  return (
    <section className="py-24 bg-stone-900 border-t border-stone-800 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-stone-100 mb-4 tracking-wide">
            Legends of the <span className="text-emerald-500">Hunter</span> World
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed">
            The bonds forged in adversity and the deadliest of enemies. A testament to willpower.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((char, index) => (
            <motion.div
              key={char.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${char.image})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-cinzel font-bold text-white mb-1">
                    {char.name}
                  </h3>
                  <span className={`inline-block px-3 py-1 bg-stone-900/80 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest ${char.color} border mb-4`}>
                    {char.title}
                  </span>
                  
                  <p className="text-stone-300 italic text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-l-2 border-emerald-500 pl-3">
                    {char.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
