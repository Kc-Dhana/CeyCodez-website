import React from "react";
import AnimatedBackground from "./AnimatedBackground";

const Hero = ({ scrollToPackages }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white overflow-hidden px-6 sm:px-12">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 text-center md:text-left">
        {/* LEFT SIDE — Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 sm:mb-6 tracking-tight 
            bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 text-transparent bg-clip-text 
            animate-pulse drop-shadow-[0_0_25px_rgba(34,211,238,0.4)] leading-tight"
          >
            <span className="block">DECODE</span>
            <span className="block">THE FUTURE</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-8 sm:mb-12 font-medium">
            Code. Create. Evolve.
          </p>

          <button
            onClick={scrollToPackages}
            className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 
            hover:bg-cyan-400 hover:text-black font-bold text-base sm:text-lg tracking-wide 
            transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] 
            hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] cursor-pointer"
          >
            EXPLORE SOLUTIONS
          </button>
        </div>

        {/* RIGHT SIDE — Image (Top on Mobile) */}
        <div className="flex-1 flex justify-center md:justify-center md:mb-0">
          <img
            src="/Lion1.png"
            alt="CeyCodez Logo"
            className="w-72 sm:w-[400px] md:w-[480px] lg:w-[550px] xl:w-[600px] animate-float"
          />
        </div>
      </div>

      {/* Floating Animation
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style> */}
    </section>
  );
};

export default Hero;
