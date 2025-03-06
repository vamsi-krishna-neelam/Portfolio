import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typing from 'react-typing-effect';
import ResumeButton from "../components/ResumeButton";
import Social from "../components/Social";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="bgclass flex justify-center items-center h-screen pt-48 md:pt-36"> {/* Adjusted padding-top for small screens */}
      <div className="text-center w-full px-4 md:px-8 lg:px-16">
        <p className="text-3xl md:text-5xl lg:text-8xl mb-6 sm:mb-12 sm:mt-6 text-white suse-title" data-aos="fade-up">
          Hi, I&apos;m Mirza Aslam Beg
        </p>
        <Typing 
          text={[
            "I am a Frontend Developer", 
            "I am a Backend Developer", 
            "I am a Full Stack Developer", 
            "I am a Competitive Coder & Problem Solver", 
            "Solved 115+ qsn 2⭐⭐Codechef",
            "Solved 130+ qsn pupils max 1320 Codeforces",
            "Solved 450+ Leetcode DSA problems", 
            "4⭐ HackerRank DSA &Problem Solving",
          ]}
          className="text-2xl md:text-4xl lg:text-6xl text-[#ff004f] suse-title mb-6"
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={1000}
        />
        <div className="flex justify-center mt-6" data-aos="fade-up">
          <div className="w-48 px-8 py-4 text-center bg-gray-800 hover:bg-black text-white rounded-xl text-lg">
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
