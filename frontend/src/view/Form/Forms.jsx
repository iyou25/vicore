import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { formdropdown } from "../../Data";
import axios from "axios";
import Swal from "sweetalert2";

function Forms() {
  const [inputForms, setinputForms] = useState({
    PROJECT_NAME: "",
    API_URL: "",
    API_KEY: ""
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setinputForms({
      ...inputForms,
      [name]: value
    });
  };

  const [selectedValue, setSelectedValue] = useState("");
  const handleDropdownChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit payload", inputForms, selectedValue);
    axios
      .post("http://127.0.0.1:5000/projects/post", {
        project_name: inputForms.PROJECT_NAME,
        project_url: inputForms.API_URL,
        project_key: inputForms.API_KEY,
        project_section: selectedValue
      })
      .then(function (response) {
        Swal.fire({
          title: "Success!",
          text: "Your project has been added.",
          icon: "success",
          confirmButtonText: "OK"
        }).then(() => {
          window.location.href = "/Project";
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto mt-12">
      <div className="flex-1 mt-8 p-6">
        <div className="bg-slate-50 p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2 font-mono"
                htmlFor="projectName"
              >
                Project Name
              </label>
              <input
                name="PROJECT_NAME"
                id="projectName"
                type="text"
                placeholder="Enter Project Name"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2 font-mono"
                htmlFor="apiUrl"
              >
                API URL
              </label>
              <input
                name="API_URL"
                id="apiUrl"
                type="url"
                placeholder="Enter API URL"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2 font-mono"
                htmlFor="apiKey"
              >
                API Key
              </label>
              <input
                name="API_KEY"
                id="apiKey"
                type="text"
                placeholder="Enter API Key"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* --------------------Dropdown------------------- */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2 font-mono"
                htmlFor="frameDropdown"
              >
                Frame
              </label>
              <select
                name="Frame"
                id="frameDropdown"
                onChange={handleDropdownChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option className="font-mono">
                  <span className="font-mono">...</span>
                </option>
                <option value={formdropdown[0]}>{formdropdown[0]}</option>
                <option value={formdropdown[1]}>{formdropdown[1]}</option>
                <option value={formdropdown[2]}>{formdropdown[2]}</option>
                <option value={formdropdown[3]}>{formdropdown[3]}</option>
              </select>
            </div>
            {/* <button
              type="submit"
              className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => window.location.reload(false)}
            >
              ADD
            </button> */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disableElevation
            >
              <span className="font-bold">add</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forms;
