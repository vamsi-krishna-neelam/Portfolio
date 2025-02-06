import info from "../educationlogos.json";
import EducationBox from "../components/EducationBox";

export default function Education() {
  return (
    <div className="bg-black text-white pt-24 px-4 md:px-16">
      <p className="raleway-bold text-4xl">Education</p>
      <div className="w-full h-1 rounded-sm bg-gray-500 my-6 mb-8"></div>
      <div className="grid gap-6 md:grid-cols-2">
        {info &&
          info.values.map((e) => {
            return (
              <EducationBox
                logo={e.logo}
                name={e.name}
                year={e.year}
                branch={e.branch}
                grade={e.grade}
                key={e.id}
              />
            );
          })}
      </div>
    </div>
  );
}
