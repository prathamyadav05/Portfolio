import {
  FaPhp,
  FaNode,
  FaReact,
  FaHtml5,
  FaPython,
  FaJava,
  FaGitAlt,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import {
  TbBrandCpp,
  TbBrandJavascript,
} from "react-icons/tb";

import {
  SiMysql,
  SiPostman,
  SiExpress,
  
} from "react-icons/si";

export default function Skills() {
  return (
    <>
      <section id="skills" className="w-full mb-32">
        <div className="flex flex-col justify-center ">
          <div className="h-[7rem] bg-black text-white text-3xl flex items-center justify-center">
            Skills
          </div>

          <div className="flex w-9/10 my-12 mx-auto justify-evenly gap-14  md:px-52 align-middle flex-wrap ">
            <div
              className="text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50"
              data-aos="fade-up"
            >
            
              <TbBrandCpp />
              <p className="text-sm text-center mx-auto"> C/C++</p>
            </div>

            <div
              className="text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50"
              data-aos="fade-up"
            >
              <FaPython />
              <p className="text-sm text-center mx-auto"> Python</p>
            </div>

            <div
              className="text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50"
              data-aos="fade-up"
            >
                <FaJava />
              <p className="text-sm text-center mx-auto"> Java</p>
            </div>

            <div
              className="text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50"
              data-aos="fade-up"
            >
            
              
              <FaHtml5 />
              <p className="text-sm text-center mx-auto"> HTML</p>
            </div>

            <div
              className="text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50"
              data-aos="fade-up"
            >
              <FaCss3Alt />
              <p className="text-sm text-center mx-auto"> CSS</p>
            </div>

            <div
              className="text-6xl text-center rounded-3xl text-white shadow-lg shadow-[#53bf63]/50 p-3"
              data-aos="fade-up"
            >
            
              <TbBrandJavascript />
              <p className="text-sm text-center mx-auto"> Javascript</p>
            </div>

            <div
              className="text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50"
              data-aos="fade-up"
            >
            
              <FaBootstrap />
              <p className="text-sm text-center mx-auto"> Bootstrap</p>
            </div>

            <div
              className="text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50"
              data-aos="fade-up"
            >
              <FaReact />
              <p className="text-sm text-center mx-auto"> ReactJS</p>
            </div>

            <div
              className="text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50"
              data-aos="fade-up"
            >
          
            
              <SiMysql />
              <p className="text-sm text-center mx-auto"> MySQL</p>
            </div>

            <div
              className="text-6xl rounded-3xl text-white p-3 shadow-lg shadow-[#53bf63]/50"
              data-aos="fade-up"
            >
            
            
              <FaGitAlt />
              <p className="text-sm text-center mx-auto"> GitHub</p>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
}
