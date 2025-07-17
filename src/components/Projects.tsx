
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const mainProject = {
    title: "Self Driving Vehicle",
    description:
      "An advanced self-driving system powered by ROS, PyTorch, and real-time sensor fusion. Utilizes deep learning for object detection, path planning, and decision-making. Version 2 introduces optimized ROS nodes, improved localization, and faster model inference for safer autonomous navigation. Up to 50% faster inference time and improved multi-sensor integration.",
    image: "selfdrivingcar.png",
    technologies: ["CUDA", "PyTorch", "Python", "C++"],
    githubUrl: "#",
    liveUrl: "#",
  };

  const smallerProjects = [
    {
      title: "Python Library-> MLplay",
      description: "PyTorch-based ML library with CUDA support, hyperparameter tuning, mixed-precision and distributed training.",
      image:
        "mlplay.png",
      technologies: ["PyTorch", "Cuda", "Sk-learn"],
      githubUrl: "https://github.com/onemriganka/mlplay.git",
      liveUrl: "#",
    },
    {
      title: "MLops Pipeline",
      description:
        "End-to-end MLOps pipeline using Python, Docker, DVC, MLflow, and Airflow . CI/CD",
      image:
        "MLopss.png",
      technologies: ["Python", "Apache", "MLflow"],
      githubUrl: "https://github.com/onemriganka/mlops-PricePrediction.git",
      liveUrl: "#",
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application with Spring Boot backend",
      image:
        "appprojectspirng.png",
      technologies: ["React Native", "Spring Boot", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 rounded-lg bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center pb-5 md:text-5xl font-bold text-gray-900 mb-4">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="pb-1 pl-2 bg-slate-700 text-white w-28 rounded-md hover:cursor-pointer font-semibold hover:bg-slate-400 transition-all duration-300 mb-4">
            <p className="p-2">Developing</p>
          </div>

          {/* Main Project */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 mb-16 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 lg:order-1">
                <h3 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {mainProject.title}
                </h3>
                <p className="lg:text-lg text-gray-700 mb-6 leading-relaxed">
                  {mainProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {mainProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/70 text-gray-800 rounded-full text-sm font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={mainProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1 lg:px-6 lg:py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                  <a
                    href={mainProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1 lg:px-6 lg:py-3 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0 lg:order-2">
                <div className="w-80 h-60 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={mainProject.image}
                    alt={mainProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Projects */}
          <div className="pb-1 pl-5 bg-slate-800 text-white w-36 rounded-md hover:cursor-pointer font-semibold hover:bg-slate-400 transition-all duration-300 mb-4">
            <p className="p-2">Top Projects</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smallerProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 lg:px-6 lg:py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 lg:px-6 lg:py-3 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
