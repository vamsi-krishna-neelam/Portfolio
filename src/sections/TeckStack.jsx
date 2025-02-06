import TechBox from "../components/TechBox";
import logo from "../techlogo.json";

export default function TeckStack() {
  return (
    <div className="bg-black text-white pt-24 px-16">
      <p className="raleway-bold  text-4xl">Tech Stack</p>
      <div className="w-full h-1 rounded-sm bg-gray-500 my-6 mb-8"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {logo &&
          logo.values.map((e) => {
            return (
              <div className=" rounded-lg p-1" key={e.id}>
                <TechBox logo={e.val} name={e.key} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
