import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typing from 'react-typing-effect';
import ResumeButton from "../components/ResumeButton";
import Social from "../components/Social";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="bgclass flex justify-center items-center h-screen pt-48 md:pt-36"> {/* Adjusted padding-top for small screens */}
      <div className="text-center w-full px-4 md:px-8 lg:px-16">
        <p className="text-3xl md:text-5xl lg:text-8xl mb-6 sm:mb-12 sm:mt-6 text-white suse-title" data-aos="fade-up">
          Hi, I&apos;m Vamsi Krishna     ffwfss  
          
        </p>
        <Typing
          text={[
<<<<<<< HEAD
            "I am a Frontend Developer", 
            
            "I am a Full Stack Developer", 
            "I am a Competitive Coder & Problem Solver", 
            "Solved 170+ qsn 2⭐⭐Codechef",
            "Solved 150+ Leetcode DSA problems", 
=======
            "I am a Full Stack Developer",
            "Solved 580+ Leetcode DSA problems",
            "I am a Frontend Developer",
            "I am a Backend Developer",
            "I am a Competitive Coder & Problem Solver",
            "Solved 115+ qsn 2⭐⭐Codechef",
            "Solved 130+ qsn pupils max 1320 Codeforces",
>>>>>>> 25e3d6586b046ca1a3729ef07499d38e277e53eb
            "4⭐ HackerRank DSA &Problem Solving",
          ]}
          className="text-xl md:text-3xl lg:text-5xl text-[#00b09b] suse-title mb-6"
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={1000}
        />
        <div className="flex justify-center mt-6" data-aos="fade-up">
          <div className="px-4 py-2 rounded font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow hover:shadow-lg transition">
            <ResumeButton />
          </div>
        </div>
        <div className="flex justify-center mt-8" data-aos="fade-up">
          <Social />
        </div>
      </div>
    </div>
  );
}