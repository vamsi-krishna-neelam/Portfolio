import ProjectBox from "../components/ProjectBox";
import projectsData from "../projects.json";

// Fisher-Yates Shuffle function
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

export default function Projects() {
  const shuffledProjects = shuffleArray([...projectsData.projects]); // Shuffle a copy of the projects array

  return (
    <div className="bg-black text-white pt-24 px-16">
      <p className="raleway-bold text-4xl">Projects</p>
      <div className="w-full h-1 rounded-sm bg-gray-500 my-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shuffledProjects.map((e) => {
          return (
            <ProjectBox
              key={e.id}
              pic={e.pic}
              title={e.title}
              desc={e.desc}
              github={e.github}
              website={e.website}
            />
          );
        })}
      </div>
    </div>
  );
}
