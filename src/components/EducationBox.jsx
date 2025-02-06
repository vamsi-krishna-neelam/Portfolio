export default function EducationBox({ logo, name, year, branch, grade }) {
  return (
    <div className="flex flex-col lg:flex-row border bg-black text-white border-black hover:translate-x-[-10px] hover:transition-all hover:duration-300 hover:ease-in-out rounded-xl px-2 py-2 mb-2 shadow-lg">
      <div className="bg-black text-white flex justify-center items-center w-full lg:w-1/5 mb-4 lg:mb-0">
        <img src={logo} className="w-24 lg:w-48" alt={`${name} logo`} />
      </div>
      <div className="bg-black text-white py-4 lg:py-6 pl-4 lg:pl-8 w-full lg:w-4/5">
        <p className="text-2xl lg:text-4xl mb-2 lg:mb-4 raleway-bold">{name}</p>
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <p className="text-lg lg:text-xl work-sans-regular mb-2 lg:mb-4">{branch}</p>
          <p className="text-lg lg:text-xl work-sans-regular mb-2 lg:mb-4">{year}</p>
        </div>
        {grade <= 10 ? (
          <p className="text-base lg:text-lg work-sans-regular">CGPA: {grade}</p>
        ) : (
          <p className="text-base lg:text-lg work-sans-regular">Percentage: {grade}%</p>
        )}
      </div>
    </div>
  );
}
