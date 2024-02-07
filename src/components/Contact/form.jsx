import React from "react";

const formFields = [
  { id: "username", label: "User name" },
  { id: "email-address-icon", label: "Your Email" },
  { id: "phone-icon", label: "Enter your number " },
  { id: "location", label: "Location" },
  { country: "Message", label: "Message" },
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

          <input
            type="text"
            id={field.id}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={field.label}
          />
        </div>
      ))}
    </>
  );
}

export default Form;
