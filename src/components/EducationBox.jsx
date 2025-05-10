export default function EducationBox({ logo, name, year, branch, grade }) {
  return (
    <div className="flex flex-col lg:flex-row border bg-gradient-to-r from-black to-gray-900 text-white border-black hover:translate-x-[-10px] hover:transition-all hover:duration-300 hover:ease-in-out rounded-xl px-4 py-4 mb-4 shadow-xl transform">
      <div className="bg-black text-white flex justify-center items-center w-full lg:w-1/5 mb-4 lg:mb-0">
        <img src={logo} className="w-24 lg:w-32" alt={`${name} logo`} />
      </div>
      <div className="bg-black text-white py-4 lg:py-6 pl-6 lg:pl-10 w-full lg:w-4/5">
        <p className="text-2xl lg:text-4xl mb-2 lg:mb-4 font-semibold tracking-wide">{name}</p>
        <div className="flex flex-col lg:flex-row justify-between w-full mb-4">
          <p className="text-lg lg:text-xl font-medium opacity-80 mb-2 lg:mb-0">{branch}</p>
          <p className="text-lg lg:text-xl font-medium opacity-80 mb-2 lg:mb-0">{year}</p>
        </div>
        <div className="flex items-center">
          <p className="text-lg lg:text-xl font-medium opacity-80">
            {grade <= 10 ? `CGPA: ${grade}` : `Percentage: ${grade}%`}
          </p>
        </div>
      </div>
    </div>
  );
}
