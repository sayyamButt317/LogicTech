import React from "react";

const formFields = [
  { id: "email-address-icon", label: "Your Email" },
  {id:"phone-icon",label:"Enter your number "}
 
];

function Form() {
  return (
    <>
      <h1 className="text-5xl ml-5">GET A RESPONSE TODAY!</h1>
      {formFields.map((field, index) => (
        <div key={index} className="max-w-sm mx-auto mt-5">
          <label
            htmlFor={field.id}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            {field.label}
          </label>
          <div className="relative">
            <svg
              className="absolute w-4 h-4 text-gray-500 dark:text-gray-400 top-1/2 transform -translate-y-1/2 left-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            <input
              type="text"
              id={field.id}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={field.label}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Form;
