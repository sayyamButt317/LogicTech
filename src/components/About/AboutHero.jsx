import React from "react";
import animation from "../../assets/animation.gif";
import People from "../../assets/people.png";


function AboutPage() {
  return (
    <div className="w-full h-auto md:mx-auto">
        <div className="w-full min-h-80 bg-gradient-to-r from-black to-black ...">
     
        <div className="flex flex-col items-center justify-center md:flex-row md:container mx-auto p-6">
          <h1 className="font-serif text-white text-4xl font-bold mb-4 md:w-1/2 md:px-6">
            Transforming Lives Through Technology
          </h1>
          <img src={People} className="max-w-full h-auto md:w-1/2" alt="Code GIF" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

