import React from "react";

const formFields = [
  { id: "username", label: "User name" },
  { id: "email", label: "Your Email" },
  { id: "phone", label: "Enter your number " },
  { id: "location", label: "Enter Your Location" },
  { id: "text", label: "Message here" },
];

const Map = () => {
  return (
    <>
      <div className="container">
        <h1 className="flex-row item-center justify mt-5 text-3xl font-sans">
          Get Your Response Today!
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row mt-5 items-center justify-between">
        <div className="container flex-col ">
          {formFields.map((field, index) => (
            <div key={index} className="max-w-sm mx-auto mt-5">
              <label
                htmlFor={field.id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                {field.label}
              </label>
              <input
                type="text"
                id={field.id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={field.label}
              />
            </div>
            
          ))}
          <div className="Container">
          <button className="w-full px-20 sm:w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full mt-5 mb-5">
            Submit
          </button>
          </div>
       
        </div>

        <div className="container mx-auto sm:ml-4 sm:mt-5">
          <div className="flex-row">
            <div className="w-full sm:w-auto sm:h-[450px] rounded-lg overflow-hidden">
              <iframe
                title="google-maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.99640938785!2d-122.52000226069879!3d37.75780703861689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1707470234545!5m2!1sen!2s"
                className="border-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;

