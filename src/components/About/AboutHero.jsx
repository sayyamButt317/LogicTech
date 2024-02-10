import React from "react";
import info from "../../assets/info.png";
import Robot from "../../assets/robot.png";

function AboutPage() {
  return (
    <div className="w-full h-auto md:mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100">
        <div className="flex flex-col items-center justify-center md:flex-row md:container mx-auto p-6">
          <h1 className="font-serif text-black text-4xl font-bold mb-4 md:w-1/2 md:px-6">
            Transforming Lives Through Technology
          </h1>
       
          <img
            src={info}
            className="max-w-full h-auto md:w-1/2"
            alt="Code GIF"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
