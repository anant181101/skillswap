import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExploreSection from "./components/ExploreSection";

function App() {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-700 fade-in-slide-up">
          Welcome to SkillSwap 👋
        </h1>
        <p className="mt-4 text-lg text-gray-600 fade-in-slide-up">
          Learn. Teach. Grow. Swap your skills here!
        </p>
      </div>
       <HeroSection />
       <ExploreSection/>
    </>
  );
}

export default App;
