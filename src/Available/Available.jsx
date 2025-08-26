import React, { useState } from "react";

const Available = () => {
  const [activeTab, setActiveTab] = useState("available");

  return (
    <div className="flex justify-between items-center mt-8 mb-4">
      <div className="font-bold">
        <h1>Available Players</h1>
      </div>
      <div className="flex justify-center border border-gray-300 rounded-xl">
        <button
          onClick={() => setActiveTab("available")}
          className={` py-4 px-8 rounded-l-xl font-bold
            ${
              activeTab === "available" ? "bg-lime-500 text-white" : "bg-white"
            }`}
        >
          Available
        </button>

        <button
          onClick={() => setActiveTab("selected")}
          className={` py-4 px-8 rounded-r-xl font-bold
            ${
              activeTab === "selected" ? "bg-lime-500 text-white" : "bg-white"
            }`}
        >
          Selected
        </button>
      </div>
    </div>
  );
};

export default Available;
