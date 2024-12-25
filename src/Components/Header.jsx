import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [show, setShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);

  function showLink() {
    setShow((prev) => !prev);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(windowWidth);
    if (windowWidth > 760) {
      setShow(false);
    }
  }, [windowWidth]);

  return (
    <>
      <header className=" pb-20  overflow-hidden w-full relative" id="home">
        <nav
          className={`  h-fit pb-3 z-40 bg-none fixed top-0 w-[100%] transition-colors duration-700   ${
            show ? " bg-[#0000007d] h-fit   md:h-16 " : " "
          } ${
            scrolled || show
              ? "bg-[#000000cb] backdrop-blur-3xl  "
              : "bg-transparent  "
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between px-3  md:px-40 pt-3">
            <div className=" w-fit ml-8 ">
              
            </div>
            <GiHamburgerMenu
              className=" text-white text-xl md:hidden top-6 flex absolute  right-8"
              onClick={showLink}
            />
            <ul
              className={` md:flex gap-16  w-fit items-center   ${
                show ? "block my-[4rem] mx-auto" : "hidden"
              }  `}
            >
              <li
                className={` text-white text-2xl text-center w-full  ${
                  show ? "mt-8" : ""
                } hover:text-[#53bf63]`}
              >
                <a href="#home">Home</a>
              </li>
              <li
                className={` text-white text-2xl text-center w-full  ${
                  show ? "mt-8" : ""
                }  z-10 hover:text-[#53bf63] `}
              >
                <a href="#about">About</a>
              </li>

              <li
                className={` text-white text-2xl text-center w-full  ${
                  show ? "mt-8" : ""
                }  z-10 hover:text-[#53bf63] `}
              >
                <a href="#skills">Skills</a>
              </li>

              <li
                className={` text-white text-2xl text-center w-full  ${
                  show ? "mt-8" : ""
                } hover:text-[#53bf63]`}
              >
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="absolute top-[-15rem] right-[28rem] w-[35rem] h-[25rem]   z-0 border rounded-[100%] bg-[#42954f] blur-[5rem]"></div>
        <div
          id="2nd"
          className="absolute top-[10rem] right-[-14rem] w-[16rem] h-[16rem]   z-0 border rounded-[100%] bg-[#42954f] blur-[5rem]"
        ></div>
        <div>
          <h1
            className=" text-3xl text-center text-white  mt-[1rem]"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
             <br />
          </h1>
          <h1
            className=" md:text-6xl text-4xl font-serif text-[#53bf63] font-extrabold text-center mt-12 "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
                src="../../Images/logo.png"
                className="rounded-xl h-[15rem]  md:h-[15rem] object-cover mx-auto mb-10  "
                alt="LogoImage"
              />
            PRATHAM YADAV
          </h1>
          <p
            className=" w-[80%] md:w-1/2 mx-auto text-white text-lg md:text-xl text-center mt-12"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            A Computer Science Engineer Specialized in AI and Machine Learning
            with a keen attention to details and a knack for problem-solving.
            While I may be relatively new to the field, my enthusiasm for
            coding, continuous learning, adept at collaborating and
            communicating new ideas effectively drives me to excel in every
            project I undertake.
          </p>
        </div>

        <div
          className="flex flex-col items-center mt-12 gap-6 z-40"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="flex gap-12">
            <a
              href="https://www.linkedin.com/in/pratham-yadav-"
              target="_blank"
            >
              <FaLinkedin className="text-white text-5xl" />
            </a>

            <a href="https://github.com/prathamyadav05" target="_blank">
              <FaGithub className="text-white text-5xl" />
            </a>
          </div>

          <div>
            <a
              href="https://drive.google.com/file/d/1MsG2atsYbEHMDk61zw91cF5RDWmj8Giu/view?usp=sharing"
              target="_blank"
            >
              <div className="w-fit m-auto px-8 py-2 text-white mt-4 mb-12 border border-[#53bf63] hover:bg-[#53bf63] rounded-3xl cursor-pointer flex gap-2 items-center">
                <FaDownload /> <span>Resume</span>
              </div>
            </a>
          </div>
        </div>

        <div className="absolute bottom-[-10rem] left-[-4rem] w-1/2 h-[20rem]   z-0 border rounded-[100%] bg-[#42954f] blur-[5rem]"></div>
      </header>
    </>
  );
}
