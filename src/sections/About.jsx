import photo from "../images/profile.png";
import Social from "../components/Social";

export default function About() {
  return (
    <div className="pt-24 px-4 md:px-16 bg-black">
      <p className="raleway-bold text-blue-900 text-4xl text-white">About Me</p>
      <div className="w-full h-1 rounded-sm bg-gray-500 my-6"></div>
      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img
            src={photo}
            className="rounded-3xl h-48 md:h-72 shadow-lg border bg-black border-gray-500"
            alt="Mirza Aslam Beg"
          />
        </div>
        <div className="lg:w-1/2 py-8 md:py-12 px-4 md:px-12 text-white">
          <p className="work-sans-regular text-2xl md:text-5xl text-white font-extrabold mb-4 md:mb-6">
            Meet Aslam, a <span className="text-[#ff004f]">Full Stack Developer</span> and <span className="text-[#ff004f]">Competitive Coder.</span>
          </p>
          <p className="work-sans-regular text-base md:text-xl mt-4">
            Pursuing B.Tech in Electronics and Communication Engineering (ECE) at Tezpur University, Assam. Skilled in frontend and backend development, proficient in translating complex requirements into elegant solutions, and driven by a passion for continuous learning and innovation. 2star Codechef max 1501,pupils max 1254 Codeforces,Solved 400+ DSA questions on LeetCode, 4-star rating on HackerRank in DSA,total 600+ dsa qsn solved.
          </p>
          <div className="mt-4 md:mt-8">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}
