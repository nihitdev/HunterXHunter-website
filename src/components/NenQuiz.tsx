import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    text: "When faced with an impossible wall blocking your path, what do you do?",
    options: [
      { text: "Smash through it.", trait: "Enhancer" },
      { text: "Find a way around or over it.", trait: "Transmuter" },
      { text: "Analyze its structure to find a weakness.", trait: "Conjurer" },
      { text: "Get angry and blow it up.", trait: "Emitter" },
    ]
  },
  {
    text: "How do you prefer to handle your money?",
    options: [
      { text: "Spend it on what I want right now!", trait: "Enhancer" },
      { text: "Save it, but use it for fun when the time is right.", trait: "Transmuter" },
      { text: "Invest carefully and track every penny.", trait: "Conjurer" },
      { text: "Make others manage it for me.", trait: "Manipulator" },
    ]
  },
  {
    text: "What is your typical role in a group?",
    options: [
      { text: "The fiery leader charging ahead.", trait: "Enhancer" },
      { text: "The wildcard who keeps things interesting.", trait: "Transmuter" },
      { text: "The strategist observing everything.", trait: "Manipulator" },
      { text: "The charismatic center of attention.", trait: "Specialist" },
    ]
  }
];

export default function NenQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (trait: string) => {
    const newAnswers = [...answers, trait];
    if (newAnswers.length === questions.length) {
      // Calculate result based on most frequent trait (or random if tie, simplified here)
      const counts = newAnswers.reduce((acc, curr) => ({ ...acc, [curr]: (acc[curr as keyof typeof acc] || 0) + 1 }), {} as Record<string, number>);
      const highest = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
      setResult(highest);
    } else {
      setAnswers(newAnswers);
      setCurrentQ(currentQ + 1);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section className="py-24 px-6 bg-stone-950 border-t border-stone-800 relative isolate">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_70%)] -z-10" />
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-stone-100 mb-8">
          Water Divination <span className="text-emerald-500">Test</span>
        </h2>
        
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                <div className="mb-8">
                  <span className="text-emerald-500 font-mono text-sm tracking-widest mb-2 block">QUESTION {currentQ + 1} OF {questions.length}</span>
                  <p className="text-xl md:text-2xl text-stone-200">{questions[currentQ].text}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentQ].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.trait)}
                      className="p-4 rounded-xl border border-stone-700 bg-stone-950/50 text-stone-300 hover:border-emerald-500 hover:text-emerald-400 hover:bg-stone-900 transition-all duration-300 text-sm md:text-base text-left group"
                    >
                      <span className="block group-hover:translate-x-1 transition-transform">{opt.text}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <p className="text-stone-400 mb-2 uppercase tracking-widest text-sm">Your Aura Affinity</p>
                <h3 className="text-5xl font-cinzel font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  {result}
                </h3>
                <p className="text-stone-300 mb-8 max-w-lg mx-auto italic">
                  According to Hisoka's personality test, your nature aligns with the {result} class. 
                </p>
                <button
                  onClick={reset}
                  className="px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold tracking-widest text-sm transition-colors duration-300"
                >
                  RETAKE TEST
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
