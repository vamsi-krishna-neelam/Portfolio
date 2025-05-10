import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ResumeButton from "../components/ResumeButton";
import logo from "../images/logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleClick = (val) => {
    document.getElementById(val).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close the menu on navigation
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-40 relative flex items-center justify-between bg-white dark:bg-gray-900 h-16 md:h-14 px-4 md:px-8 shadow-md">
      <div className="flex items-center gap-4 p-1 whitespace-nowrap duration-300 ease-in-out hover:rounded-tr-[15px] hover:rounded-bl-[15px] transition duration-300 ease-in-out">
        <button onClick={() => handleClick("hero")}>
          <img src={logo}
               className="h-12 md:h-10 w-12 md:w-10 rounded-full border-4 border-gray-800 hover:border-white transition duration-300 ease-in-out"
               alt="Logo" /> {/* Circular and amazing logo with animated border */}
        </button>
        <h1 className="text-xl md:text-lg font-serif text-gray-800 dark:text-white">Vamsi Krishna Neelam</h1> {/* User name in serif style */}
      </div>
      <div className="hidden md:flex gap-4 text-lg md:text-white raleway-semibold">
        <button onClick={() => handleClick("about")} className="btns" data-aos="fade-up">About</button>
        <button onClick={() => handleClick("education")} className="btns" data-aos="fade-up">Education</button>
        <button onClick={() => handleClick("tech-stack")} className="btns" data-aos="fade-up">Tech-stack</button>
        <button onClick={() => handleClick("projects")} className="btns" data-aos="fade-up">Projects</button>
        <button onClick={() => handleClick("contact-me")} className="btns" data-aos="fade-up">Contact Me</button>
        <div className="px-4 py-2 bg-gray-800 text-white hover:bg-black rounded-lg font-normal">
          <ResumeButton />
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-gray-800 dark:bg-gray-900 flex flex-col items-center space-y-2 py-2 shadow-lg md:hidden">
          <button onClick={() => handleClick("about")} className="btns text-base" data-aos="fade-up">About</button>
          <button onClick={() => handleClick("education")} className="btns text-base" data-aos="fade-up">Education</button>
          <button onClick={() => handleClick("tech-stack")} className="btns text-base" data-aos="fade-up">Tech-stack</button>
          <button onClick={() => handleClick("projects")} className="btns text-base" data-aos="fade-up">Projects</button>
          <button onClick={() => handleClick("contact-me")} className="btns text-base" data-aos="fade-up">Contact Me</button>
          <div className="px-4 py-2 bg-gray-800 text-white hover:bg-black rounded-lg font-normal">
            <ResumeButton />
          </div>
        </div>
      )}
    </div>
  );
}
