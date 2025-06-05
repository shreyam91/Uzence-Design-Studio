import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";

interface FormData {
  name: string;
  age: number | string;
  email: string;
  interest: string[];
  theme: "light" | "dark";
}

interface FormErrors {
  name?: string;
  age?: string;
  email?: string;
  interest?: string;
}

const TabForm: React.FC = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [data, setData] = useState<FormData>({
    name: "Name",
    age: "24",
    email: "email@email.com",
    interest: ["coding"],
    theme: "dark",
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: (data: FormData) => {
        const err: FormErrors = {};

        if (!data.name || data.name.length < 2) {
          err.name = "Name is invalid";
        }

        const ageNum = typeof data.age === "string" ? parseInt(data.age, 10) : data.age;
        if (!ageNum || isNaN(ageNum) || ageNum < 18) {
          err.age = "Age is invalid";
        }

        if (!data.email || data.email.length < 2 || !data.email.includes("@")) {
          err.email = "Email is invalid";
        }

        setErrors(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: (data: FormData) => {
        const err: FormErrors = {};
        if (!data.interest || data.interest.length === 0) {
          err.interest = "Select at least one interest.";
        }
        setErrors(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        setErrors({});
        return true;
      },
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(0);
  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if (tabs[activeTab].validate(data)) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (tabs[activeTab].validate(data)) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleTabChange = (index: number) => {
    if (tabs[activeTab].validate(data)) {
      setActiveTab(index);
    }
  };

  const handleSubmitButton = () => {
    console.log("Submitted Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <>
    <div className="p-8 bg-white">
      <h2 className="text-xl font-bold mb-8">Tab Component</h2>
      <p> this is a tab component with dummy data</p>
      </div>
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="flex space-x-4 mb-6 border-b pb-2">
        {tabs.map((t, index) => (
          <button
          key={index}
          className={`text-sm font-semibold px-4 py-2 rounded-md transition ${
            index === activeTab
            ? "bg-indigo-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
          }`}
          onClick={() => handleTabChange(index)}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>

      <div className="flex justify-between">
        {activeTab > 0 && (
          <button
          onClick={handlePrevClick}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button
          onClick={handleNextClick}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button
          onClick={handleSubmitButton}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit
          </button>
        )}
      </div>
    </div>
        </>
  );
};

export default TabForm;
