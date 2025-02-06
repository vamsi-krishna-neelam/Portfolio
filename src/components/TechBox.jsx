export default function TechBox({ logo, name }) {
  return (
    <div className="border-animation flex flex-col md:flex-row justify-center shadow-lg border-2 border-gray-500 rounded-lg py-2 px-2">
      <div className="w-full md:w-1/2 flex items-center justify-center mb-2 md:mb-0">
        <img src={"langpng/" + logo} className="h-12" alt={name + " logo"} />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center text-base md:text-xl">
        <p>{name}</p>
      </div>
    </div>
  );
}
