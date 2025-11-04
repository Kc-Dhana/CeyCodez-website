import React from "react";
import AnimatedBackground from "../components/AnimatedBackground";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-white relative overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 px-4 sm:px-6">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 sm:mb-8 tracking-tight 
          bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 text-transparent bg-clip-text 
          animate-pulse drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]"
        >
          DECODE THE FUTURE
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl text-cyan-400 mb-10 sm:mb-16 font-medium">
          Code. Create. Evolve.
        </p>

        {/* Button */}
        <a
          href="/packages"
          className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 
          hover:bg-cyan-400 hover:text-black font-bold text-base sm:text-lg tracking-wide 
          transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] 
          hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
        >
          EXPLORE SOLUTIONS
        </a>
      </div>
    </section>
  );
};

export default Home;
