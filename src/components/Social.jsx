import { FaGithub, FaLinkedin, FaYoutube, FaCode } from 'react-icons/fa';

export default function Social() {
  return (
    <div className="flex h-12 w-96 space-x-4">
      <div className="w-1/6 flex justify-center">
        <a href="https://github.com/Aslam554" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-12 w-12 text-gray-300 hover:text-gray-600" />
        </a>
      </div>
      <div className="w-1/6 flex justify-center">
        <a href="https://www.linkedin.com/in/mirza-aslam-beg-8347661ab/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-12 w-12 text-blue-700 hover:text-blue-500" />
        </a>
      </div>
      <div className="w-1/6 flex justify-center">
        <a href="https://www.youtube.com/@aslamcoding" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="h-12 w-12 text-red-600 hover:text-red-400" />
        </a>
      </div>
      <div className="w-1/6 flex justify-center">
        <a href="https://codeforces.com/profile/Aslam97" target="_blank" rel="noopener noreferrer">
          <img src="sociallogo/codeforces.png" alt="Codeofrces" width={100} className="h-12"/>
        </a>
      </div>
      <div className="w-1/6 flex justify-center">
        <a href="https://www.codechef.com/users/aslambeg97" target="_blank" rel="noopener noreferrer">
          <img src="sociallogo/codechef.png" alt="Codechef" className="h-12"/>
        </a>
      </div>
      <div className="w-1/6 flex justify-center ">
        <a href="https://leetcode.com/u/aslambeg/" target="_blank" rel="noopener noreferrer">
          <img src="sociallogo/leetcode.webp" alt="LeetCode" className="h-12"/>
        </a>
      </div>
    </div>
  );
}
