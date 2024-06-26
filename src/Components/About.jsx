export default function About() {
  return (
    <>
      <section id="about" className="w-full mb-12  ">
        <div className="h-[7rem] bg-black text-white text-3xl flex items-center justify-center">
          About
        </div>
        <div className="py-20 px-0 md:px-20 flex justify-center align-middle">
          <div className="flex gap-10 justify-center align-middle lg:flex-row md:flex-col flex-col w-full">
            <div className="relative">
              <div
                className=" w-56 md:w-[25rem] mx-auto  mb-12 "
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <img
                  src="../../Images/profileImage.jpg"
                  className="rounded-xl h-[20rem]  md:h-[30rem] object-cover ml-12"
                  width={"80%"}
                  alt="profile-image"
                />
              </div>
            </div>
            <div className=" w-[80%] mx-auto md:mx-0 md:w-80 text-white">
              <h1
                className="text-5xl font-light font-sans mb-4"
                data-aos="fade-up"
              >
                PRATHAM YADAV
              </h1>
              <h1
                className="text-3xl font-semibold font-sans mb-4 text-[#53bf63]"
                data-aos="fade-up"
              >
                Frontend Developer
              </h1>
              <h1
                className="text-3xl font-semibold font-sans mb-4 text-[#53bf63]"
                data-aos="fade-up"
              >
                Artificial Intelligence & Machine Learning
              </h1>
              <div className="">
                <div data-aos="fade-up">
                  <h1 className="text-xl font-light font-sans ">Education</h1>
                  <ul className='before:border-x-2 before:m-2 before:h-[95%] before:contents[""] before:absolute before:border-gray-400 before:-z-10 relative '>
                    <li className="before:rounded-full before:relative before:top-7 before:bg-black before:w-3 before:h-2 before:pl-5">
                      <div className=" w-40 bg-[#53bf63]  rounded-ee-full relative top-0 left-8 text-center py-1 px-3 text-white text-1xl">
                        2021 ~ Present
                      </div>
                      <div className="  my-8 mx-8 ">
                        <h1 className="text-lg text-[#53bf63] font-sans ">
                          Bachelor of Computer Science And Engineering
                        </h1>
                        <h2>
                          St. Peter's Engineering College<br />
                          Medchal, Telangana
                        </h2>
                      </div>
                    </li>
                    <li className="before:rounded-full before:relative before:top-7 before:bg-black before:w-3 before:h-2 before:pl-5">
                      <div className=" w-40 bg-[#53bf63]  rounded-ee-full relative top-0 left-8 text-center py-1 px-3 text-white text-1xl">
                        2019-2021
                      </div>
                      <div className="  my-8 mx-8 ">
                        <h1 className="text-lg text-[#53bf63] font-sans ">
                          Board of Intermediate Education
                        </h1>
                        <h2>
                          Narayana Junior College
                          <br />
                          Hyderabad, Telangana
                        </h2>
                      </div>
                    </li>
                    <li className="before:rounded-full before:relative before:top-7 before:bg-black before:w-3 before:h-2 before:pl-5">
                      <div className=" w-40 bg-[#53bf63]  rounded-ee-full relative top-0 left-8 text-center py-1 px-3 text-white text-1xl">
                        2009-2019
                      </div>
                      <div className="  my-8 mx-8 ">
                        <h1 className="text-lg text-[#53bf63] font-sans ">
                          Secondary School Certificate
                        </h1>
                        <h2>
                          St. Paul's High School
                          <br />
                          Hyderguda, Telangana
                        </h2>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
