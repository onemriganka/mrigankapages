

const TechStack = () => {
  const techIcons = [
    { name: 'React', img: "react.jpg" },
    { name: 'Spring Boot', img: "spring.jpg" },
    { name: 'TF / Torch', img: "tf.jpg" },
    { name: 'CUDA', img: "nvidia.png" },
  ];

  const languages = ['Python', 'JavaScript', 'Java', 'C++ / CUDA'];

  return (
    <section id="techstack" className=" bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 py-5">
        <h2 className="text-4xl  text-center md:text-5xl font-bold text-gray-900 mb-8">
          Tech Stack
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Left Column - Icons */}
          <div className="flex flex-col space-y-8">
            {techIcons.slice(0, 2).map((tech) => (
              <div
                key={tech.name}
                className="w-[270px] h-[280px]  group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer "
              >
                <div className={`p-5 rounded-xl bg-gradient-to-br  flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <img src={tech.img} alt={tech.name} className="" />
                </div>
                <span className="block text-center font-bold text-gray-800">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Center Column - Languages */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div
                  key={lang}
                  className="text-xl font-bold text-gray-800 py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-200 transition-all duration-300 cursor-pointer text-center min-w-[200px]"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Icons */}
          <div className="flex flex-col space-y-8">
            {techIcons.slice(2, 4).map((tech) => (
              <div
                key={tech.name}
                className="w-[270px] h-[280px] group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer "
              >
                <div className={`p-5 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <img src={tech.img} alt={tech.name} className="" />
                </div>
                <span className="pt-10 block text-center font-bold text-gray-800">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;