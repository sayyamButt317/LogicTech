import React from "react";
import People from "../../assets/people.png";

function ServicePage() {
  return (
    <div className="w-full h-auto md:max-md">
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100">
        <div className="text-center">
          <h1 className="font-sans md:font-serif text-8xl font-bold text-black ml-8 mt-20">
            WHAT WE DO
          </h1>
          <div className="Container text-1xl">
            <span className="text-center">
              Create your success stories with our Quality IT Service. See our
              key expertise below
            </span>
          </div>
        </div>
        <img src={People} alt="" className="max-w-full h-auto md:w-1/2" />
      </div>
    </div>
  );
}

export default ServicePage;
