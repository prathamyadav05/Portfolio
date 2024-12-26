const projectarr = [
  {
    name: "Employee Management App",
    disc: "This is a full-stack application developed using React, Java and MySQL.",
    code: "https://github.com/prathamyadav05/Employee-Management-App",
    image: "../../Images/employeeapp.png",
  },
  {
    name: "Educancy-Educational Consultancy Webpage",
    disc: "A Simple Web page designed using HTML5 and CSS3.",
    code: "https://github.com/prathamyadav05/Educancy",
    live: "",
    image: "../../Images/Educancy.png",
  },
  {
    name: "Loan Appoval System using ML",
    disc: "Prediction of Modernized Loan Approval using Machine Learning",
    code: "https://github.com/prathamyadav05/Prediction-of-Modernized-Loan-Approval-using-ML",
    live: "",
    image: "../../Images/Home.png",
  },
];

export default function Projects() {
  return (
    <>
      <section id="projects"   className="w-full mb-48">
        <h1 className="h-[7rem] bg-black text-white text-3xl flex items-center justify-center">
          Projects
        </h1>
        <div>
          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {projectarr.map((project, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg shadow-[#53bf63] hover:shadow-xl"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src={project.image}
                      alt={`Image of ${project.name}`}
                    />
                    <div className="absolute inset-0 bg-gray-900 opacity-25"></div>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-0 left-0 bg-[#000000ae] px-4 py-2 text-white text-sm hover:bg-[#000000ce] hover:text-[#53bf63] transition duration-500 ease-in-out"
                      >
                        Live
                      </a>
                    )}
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-0 right-0 bg-[#000000ae] px-4 py-2 text-white text-sm hover:bg-[#000000ce] hover:text-[#53bf63] transition duration-500 ease-in-out"
                    >
                      Code
                    </a>
                  </div>
                  <div className="px-6 py-4">
                    <h1 className="font-semibold text-lg text-white mb-2">
                      {project.name}
                    </h1>
                    <p className="text-white text-sm">{project.disc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
