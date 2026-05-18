import { motion } from 'framer-motion';

const arcs = [
  {
    id: 1,
    title: 'Hunter Exam',
    desc: 'The beginning of the journey. Gon leaves Whale Island to take the deadly exam and find his father.',
    image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80',
    color: 'from-emerald-500',
  },
  {
    id: 2,
    title: 'Heavens Arena',
    desc: 'The introduction to Nen. A towering fighting arena where warriors battle for money and prestige.',
    image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80',
    color: 'from-orange-500',
  },
  {
    id: 3,
    title: 'Yorknew City',
    desc: 'A dark, thrilling clash involving the mafia, the Phantom Troupe, and a high-stakes underground auction.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-500',
  },
  {
    id: 4,
    title: 'Greed Island',
    desc: 'A deadly real-world video game created by Ging. The stakes are high, and the game is unforgiving.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-500',
  },
  {
    id: 5,
    title: 'Chimera Ant',
    desc: 'An evolutionary nightmare. A battle for the survival of humanity against apex predators.',
    image: 'https://images.unsplash.com/photo-1629812456605-4a044aa38fbc?auto=format&fit=crop&w=800&q=80',
    color: 'from-red-600',
  },
  {
    id: 6,
    title: 'Succession Contest',
    desc: 'A brutal battle royale among princes aboard the Black Whale, heading towards the Dark Continent.',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80',
    color: 'from-stone-600',
  },
];

export default function ArcGallery() {
  return (
    <section className="py-24 bg-stone-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-stone-100 mb-4 tracking-wide">
              The Epic <span className="text-emerald-500">Journey</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed">
              From a simple fishing rod to the darkest corners of the world, reliving the narrative masterpieces that shape the Hunter world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arcs.map((arc, index) => (
            <motion.div
              key={arc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl isolate"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${arc.image})` }}
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${arc.color} via-stone-900/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/20 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-emerald-400 font-mono text-sm tracking-widest font-bold mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">ARC {arc.id}</span>
                <h3 className="text-3xl font-cinzel font-bold text-white mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {arc.title}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500 ease-in-out">
                  {arc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
