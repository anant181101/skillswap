import React from "react";

function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-r from-blue-100 to-purple-100">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 animate-fade-in">
        Swap Skills. Grow Together.
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 animate-fade-in delay-200">
        A new way to learn and teach. No money, just mutual exchange.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 animate-fade-in delay-500">
        Get Started
      </button>
    </section>
  );
}

export default HeroSection;
