import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-16 mt-10">
    <div className="container mx-auto flex flex-col lg:flex-row items-center h-auto md:h-[100vh] px-10 lg:px-[4%]">
      <div className="lg:w-2/3 lg:pr-8 text-center lg:text-left px-10 mt-10 lg:mt-0 mb-8">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 mb-10 max-w-[600px]">
          The bank account for modern professionals
        </h1>
        <p className="text-gray-800 text-lg mb-12 max-w-[500px]">
          Open a free foreign bank account to receive payments globally. No
          minimum deposits required.
        </p>
        <a
          href="#get-started"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>

      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <center>
          {" "}
          <img src="/hand1.png" alt="Hero Image" className="h-500" />
        </center>
      </div>
    </div>
  </section>
  )
}

export default HeroSection