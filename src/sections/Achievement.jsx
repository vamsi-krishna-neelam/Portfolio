import React from "react";
import { motion } from "framer-motion";

// Achievements and Offer Letter Data
const achievements = [
  "🌟 3★ Coder at Codechef (Max Rating: 1612)",
  "🔥 Pupil at Codeforces (Max Rating: 1255)",
  "🧠 Solved 580+ DSA problems on LeetCode (Max Rating: 1818)",
  "🎯 4★ HackerRank DSA",
  "💻 Total 850+ DSA questions solved",
];

const offerImages = [
  "/achievements/IMG-20250416-WA0009.jpg",
  "/achievements/IMG-20250416-WA0001.jpg",
  "/achievements/IMG-20250416-WA0002.jpg",
  "/achievements/IMG-20250416-WA0003.jpg",
  "/achievements/IMG-20250416-WA0004.jpg",
  "/achievements/IMG-20250416-WA0005.jpg",
  "/achievements/IMG-20250416-WA0006.jpg",
  "/achievements/IMG-20250416-WA0007.jpg",
  "/achievements/IMG-20250416-WA0008.jpg",
];

// Shuffle function to randomize the images
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Achievement = () => {
  // Randomly shuffle the offer images on every reload
  const shuffledImages = shuffleArray(offerImages);

  // Group images in rows of 3
  const rows = [];
  for (let i = 0; i < shuffledImages.length; i += 3) {
    rows.push(shuffledImages.slice(i, i + 3));
  }

  return (
    <section className="bg-black text-white px-4 md:px-12 pt-24 pb-16" id="achievements">
      <p className="text-white text-3xl font-bold">Achievements 🚀</p>
      <div className="w-32 h-1 rounded-sm bg-gray-500 my-4"></div>

      {/* DSA Section */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-3 text-[#00b09b]">
          Problem Solving & DSA
        </h3>
        <ul className="space-y-2 text-base leading-relaxed">
          {achievements.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Offer Letters Section */}
      <h3 className="text-xl font-semibold mb-6 text-[#00b09b]">
        Offer Letters 📄
      </h3>

      {rows.map((group, groupIdx) => (
        <div key={groupIdx} className="relative mb-20">
          {/* Grid Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {group.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="w-[370px] h-[400px] rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border-2 border-white/10 hover:border-teal-300 shadow-lg transition-all duration-300 p-2 relative group"
              >
                <div className="absolute -top-5 -left-5 w-16 h-16 bg-teal-600/30 rounded-full blur-2xl z-0 group-hover:scale-110 transition-transform duration-300"></div>
                <img
                  src={src}
                  alt={`Offer ${groupIdx * 3 + idx + 1}`}
                  className="rounded-xl w-full h-full object-contain border border-white/10"
                />
              </motion.div>
            ))}
          </div>

          {/* Arrow SVG between rows (skip last row) */}
          {groupIdx !== rows.length - 1 && (
            <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 z-0">
              <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
                <path
                  d="M10 0 C50 40, 50 40, 90 0"
                  stroke="#1f1f1f"  // Dark ink color
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5 5"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="6"
                    markerHeight="6"
                    refX="3"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 6 3, 0 6" fill="#1f1f1f" />
                  </marker>
                </defs>
              </svg>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Achievement;
