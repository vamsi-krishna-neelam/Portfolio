import React from "react";
import { Briefcase, Youtube, GraduationCap } from "lucide-react";
import photo from "../images/profile.png";
import Social from "../components/Social";

export default function About() {
  return (
    <section className="bg-cover bg-center text-white py-20 px-6 md:px-12 font-sans relative bg-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>

      {/* Gradient Title */}
      <p
        className="text-center text-2xl md:text-3xl font-extrabold tracking-wider mb-4 relative z-10"
        style={{
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        DEVELOPER
      </p>

      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10 relative z-10">
        Meet Aslam Beg: Crafting Code, Building Dreams
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto relative z-10">
        {/* Image on Left Now */}
        <div className="lg:w-[40%] rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
          <img
            src={photo}
            alt="Mirza Aslam Beg"
            className="rounded-xl border-4 border-[#00b09b] shadow-lg w-full h-auto"
          />
        </div>
<<<<<<< HEAD
        <div className="lg:w-1/2 py-8 md:py-12 px-4 md:px-12 text-white">
          <p className="work-sans-regular text-2xl md:text-5xl text-white font-extrabold mb-4 md:mb-6">
            Meet Vamsi Krishna, as a <span className="text-[#ff004f]">Full Stack Developer</span> and <span className="text-[#ff004f]">Competitive Coder.</span>
          </p>
          <p className="work-sans-regular text-base md:text-xl mt-4">
  Pursuing B.Tech in Computer Science and Engineering. Skilled in <span className="text-[#ff004f]">frontend and backend</span> development, proficient in translating complex requirements into elegant solutions, and driven by a passion for continuous learning and innovation. <span className="text-[#ff004f]">Google AI/ML Certified Intern</span>, <span className="text-[#ff004f]">Software Intern at Cyanvave</span>, and <span className="text-[#ff004f]">Frontend Developer</span>. Solved <span className="text-[#ff004f]">150+ DSA questions</span> on LeetCode, passionate about Java and Data Structures. Part of <span className="text-[#ff004f]">Innovative Matrix</span> team, working on real-world web projects using React.js and PHP.
</p>

          <div className="mt-4 md:mt-8">
=======

        {/* Info Section on Right */}
        <div className="lg:w-[60%] bg-[#1a1a1a] rounded-xl p-6 md:p-10 shadow-xl transform hover:scale-105 transition duration-500">
          <h3 className="text-3xl font-bold mb-1 text-[#00b09b]">Aslam Beg</h3>
          <p className="text-lg text-gray-400 mb-4">
            Full Stack Developer | 5x Intern | Nemi Wealth | Tech Influencer
          </p>

          <ul className="text-white text-base md:text-lg space-y-2 mb-6 leading-relaxed">
            <li>• B.Tech in ECE @ Tezpur University (Class of 2028)</li>
            <li>• 5x Internship experience at multiple startups</li>
            <li>• Solved 850+ DSA problems (580+ on LeetCode, 4⭐ HackerRank)</li>
            <li>• CodeChef 3⭐ (Max 1612), Codeforces Pupil (Max 1255)</li>
            <li>• Intern @ Nemi Wealth working on financial tech</li>
            <li>• 250K+ impressions as a tech mentor & LinkedIn creator</li>
          </ul>

          {/* Lucide Icons */}
          <div className="flex gap-6 items-center text-white mt-4 flex-wrap">
            <div className="flex items-center gap-2 hover:text-[#00b09b] transition duration-300">
              <Briefcase size={20} />
              <span className="text-sm">Nemi Wealth</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#00b09b] transition duration-300">
              <Youtube size={20} />
              <span className="text-sm">YouTube Channel</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#00b09b] transition duration-300">
              <GraduationCap size={20} />
              <span className="text-sm">Tezpur University</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6">
>>>>>>> 25e3d6586b046ca1a3729ef07499d38e277e53eb
            <Social />
          </div>
        </div>
      </div>
    </section>
  );
}
