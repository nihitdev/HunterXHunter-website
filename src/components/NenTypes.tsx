import { motion } from 'framer-motion';

const nenTypes = [
  { name: 'Enhancer', color: 'bg-red-500', shadow: 'shadow-red-500/50', border: 'border-red-500/30', desc: 'Strengthens themselves or objects. Simple and earnest. Water test: Volume of water increases.' },
  { name: 'Transmuter', color: 'bg-purple-500', shadow: 'shadow-purple-500/50', border: 'border-purple-500/30', desc: 'Changes the quality of aura to match something else. Whimsical and prone to deceit. Water test: Taste of water changes.' },
  { name: 'Conjurer', color: 'bg-orange-500', shadow: 'shadow-orange-500/50', border: 'border-orange-500/30', desc: 'Creates objects out of aura. High-strung and serious. Water test: Impurities appear in water.' },
  { name: 'Emitter', color: 'bg-yellow-500', shadow: 'shadow-yellow-500/50', border: 'border-yellow-500/30', desc: 'Detaches aura from the body. Impatient and volatile. Water test: Color of water changes.' },
  { name: 'Manipulator', color: 'bg-pink-500', shadow: 'shadow-pink-500/50', border: 'border-pink-500/30', desc: 'Controls animate and inanimate things. Logical and pacesetters. Water test: Leaf moves.' },
  { name: 'Specialist', color: 'bg-blue-500', shadow: 'shadow-blue-500/50', border: 'border-blue-500/30', desc: 'Any ability that does not fall into the other five. Individualistic and charismatic. Water test: Entirely different effect.' },
];

export default function NenTypes() {
  return (
    <section className="py-24 px-6 bg-stone-900 border-t border-stone-800">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-stone-100 mb-4 tracking-wide">
            The Principles of <span className="text-emerald-500">Nen</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed">
            The ability to harness and manipulate the life energy (aura) present in the body. The fundamental six categories define one's innate potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nenTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden p-8 rounded-2xl bg-stone-950 border ${type.border} hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all duration-300 group`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${type.color} shadow-[0_0_15px_currentColor]`} />
              
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-4 h-4 rounded-full ${type.color} shadow-lg ${type.shadow}`} />
                <h3 className="text-2xl font-cinzel font-semibold text-stone-200">{type.name}</h3>
              </div>
              
              <p className="text-stone-400 text-sm leading-relaxed mb-4 min-h-[60px]">
                {type.desc.split('. Water test: ')[0]}.
              </p>
              
              <div className="pt-4 border-t border-stone-800/80 mt-auto">
                <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold block mb-1">Water Divination</span>
                <p className="text-stone-300 text-sm italic group-hover:text-emerald-400 transition-colors">
                  {type.desc.split('. Water test: ')[1]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
