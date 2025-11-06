import React, { useState, useEffect } from "react";
import AnimatedBackground from "./AnimatedBackground";

const LoadingPage = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 500);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Center Content */}
      <div className="text-center relative z-10 flex flex-col items-center justify-center w-full h-full">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="/CeyCodez_Logo.webp"
            alt="CeyCodez Logo"
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 object-contain drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
          />
        </div>

        {/* Progress Bar */}
        <div className="w-[85%] sm:w-[400px] h-3 bg-gray-900 rounded-full border border-cyan-500 mx-auto overflow-hidden mb-5">
          <div
            className="h-full bg-cyan-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="text-white text-sm sm:text-base md:text-lg tracking-[0.25em] sm:tracking-[0.3em]">
          INITIALIZING...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
