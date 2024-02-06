import React from "react";
import Webdevelopment from "../../assets/WebDevelopment.png";

function ServiceList() {
  return (
    <div className="w-full h-full  flex flex-row items-center space-x-4 ml-5 mr-5">
      <img src={Webdevelopment} className="max-w-[200px] h-auto" alt="" />
      <div className="Conatiner ">
      <h1 className="mb-3">WEB DEVELOPMENT</h1>
      <p className="text-sm md:text-base">
        We acquire our thrills from creating web solutions to help to execute
        your business operations smooth, fast and efficiently. A big chunk of
        our daily routine is spent designing and developing custom online
        business systems, be it for blue-chip corporate clients, fresh-faced
        start-ups or local SMEs
      </p>
      </div>
    
    </div>
  );
}

export default ServiceList;
