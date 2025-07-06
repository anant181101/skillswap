function Home() {
  return (
    <section className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
      
      {/* LEFT SIDE – Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-6 leading-tight">
          Swap Skills. <br /> Learn Anything.
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          No money. Just pure skill exchange. Learn what you love, teach what you know.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition-all">
          Get Started
        </button>
      </div>

      {/* RIGHT SIDE – Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://via.placeholder.com/400x300"
          alt="SkillSwap Illustration"
          className="rounded-xl shadow-lg"
        />
      </div>

    </section>
  );
}

export default Home;
