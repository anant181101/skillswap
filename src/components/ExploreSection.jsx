import React from "react";

const skills = [
  {
    title: "Web Development",
    user: "Ravi Kumar",
    description: "I can teach you MERN stack from scratch.",
  },
  {
    title: "Guitar Playing",
    user: "Arijit Singh",
    description: "Acoustic guitar lessons for beginners.",
  },
  {
    title: "Spoken English",
    user: "Sarthak Joshi",
    description: "Improve fluency & confidence in speaking.",
  },
];

function ExploreSection() {
  return (
    <section className="py-10 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Explore Skills
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {skill.title}
            </h3>
            <p className="text-gray-700 mt-2">{skill.description}</p>
            <p className="mt-4 text-sm text-gray-600">By {skill.user}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Swap Skill
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreSection;
