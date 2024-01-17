import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          A bachelor degree of Information System from STMIK Nusa Mandiri.
          Experienced as a Admin HR who works with job portal, create databases
          employee , contact apllicants. Currently working as a Service Desk in
          charge of being responsible for user reports and making ticket report
          and also attending Full-Stack Web Developer bootcamp program for
          deepening skills in Web Developer. A detail-oriented individual who is
          eager for a full- time opportunity in Full-Stack Web Development
        </p>
        <br />
        <p className="text-xl"></p>
      </div>
    </div>
  );
};

export default About;
