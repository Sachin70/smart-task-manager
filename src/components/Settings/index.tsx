"use client";

import React, { useEffect, useState } from "react";

export const Settings: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Settings</h2>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-md font-semibold">Theme</h3>
        <div className="flex items-center space-x-4 mt-2">
          <button
            onClick={() => setIsDarkMode(false)}
            className={`p-2 rounded-md ${
              !isDarkMode ? "bg-gray-300" : "bg-gray-600"
            }`}
          >
            Light Mode
          </button>
          <button
            onClick={() => setIsDarkMode(true)}
            className={`p-2 rounded-md ${
              isDarkMode
                ? "bg-gray-800 text-white"
                : "bg-gray-600 text-gray-200"
            }`}
          >
            Dark Mode
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md mt-4">
        <h3 className="text-md font-semibold">Notifications</h3>
        <label className="flex items-center space-x-2 mt-2">
          <input type="checkbox" />
          <span>Enable Notifications</span>
        </label>
      </div>
    </div>
  );
};
