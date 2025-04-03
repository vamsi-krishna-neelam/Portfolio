export default function ProjectBox({ pic, title, desc, github, website }) {
  return (
    <div className="border border-gray-500 shadow-lg rounded-[50px_0_50px_0] hover:scale-[1.05] duration-500 hover:ease-in-out hover:translate-x-2 bg-black text-white p-2 overflow-hidden">
      <div>
        <img src={"projectsnap/" + pic} alt="" className=" w-full h-48 md:h-56 lg:h-64 object-contain" />
      </div>
      <div className="p-4">
        <p className="text-xl md:text-2xl raleway-bold mb-4">{title}</p>
        <p className="text-base md:text-lg text-gray-300 work-sans-regular mb-4 uppercase">{desc}</p>
      </div>
      <div className="p-4 pt-0 mb-4 flex flex-col md:flex-row gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-center"
        >
          Github
        </a>
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-700 hover:bg-teal-900 text-white px-4 py-2 rounded-lg text-center"
          >
            Website
          </a>
        )}
      </div>
    </div>
  );
}
