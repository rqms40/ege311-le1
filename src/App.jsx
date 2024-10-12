import React, { useState, useEffect } from "react";

const App = () => {
  const colors = [
    "text-violet-600",
    "text-red-600",
    "text-blue-600",
    "text-green-600",
  ];

  const hoverColors = [
    "hover:text-violet-800",
    "hover:text-red-800",
    "hover:text-blue-800",
    "hover:text-green-800",
  ];

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [colors]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 animate-fadeIn">
      <h1
        className={`text-4xl font-extrabold ${colors[colorIndex]} ${hoverColors[colorIndex]} transition duration-300 ease-in-out mb-4 animate-bounce`}
      >
        LE 1 - Creative Output
      </h1>
      <h2
        className={`text-2xl font-semibold ${colors[colorIndex]} ${hoverColors[colorIndex]} transition duration-300 ease-in-out animate-pulse`}
      >
        Group 3
      </h2>
    </div>
  );
};

export default App;
