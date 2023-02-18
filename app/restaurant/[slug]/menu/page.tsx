import React from "react";

const Menu = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-full">
      <nav className="p-2 flex justify-between container mx-auto">
        <a href="" className="font-bold text-gray-700 text-2xl">
          {" "}
          Restaurant{" "}
        </a>
        <div>
          <div className="flex">
            <button className="bg-indigo-400 text-white px-2 py-1 text-base rounded hover:bg-indigo-500 transition-all duration-500">
              Sign in
            </button>
            <button className="text-gray-600 px-2 py-1 text-base rounded hover:text-gray-800 transition-all duration-500">
              Sign up
            </button>
          </div>
        </div>
      </nav>
      <header className="relative h-96 bg-center overflow-hidden bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex text-center flex-col justify-center items-center">
        <img
          src="./photo-lg.jpg"
          className="absolute w-full opacity-50"
          alt="banner"
        />
        <h1 className="z-20 text-5xlg drop-shadow-md text-white capitalize text-center font-semibold">
          Chloelys at The Hilton (Toronto)
        </h1>
      </header>
      <div className="mx-auto relative -mt-12 container px-20">
        <article className="justify-between items-start bg-white rounded p-3 shadow-lg">
          <nav className="flex justify-start border-b-2 border-gray-200 gap-6 pb-3 ">
            <a
              href=""
              className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
            >
              Overview
            </a>
            <a
              href=""
              className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
            >
              Photo
            </a>
            <a
              href=""
              className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
            >
              Menu
            </a>
            <a
              href=""
              className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
            >
              Reviews
            </a>
          </nav>
          <h2 className="text-2xlg font-bold pt-3 pb-2">Menu</h2>
          <div className="flex flex-wrap justify-between">
            <div className="border rounded p-3 basis-1/2 mb-3">
              <h3 className="font-semibold text-lg">Surf and Turf</h3>
              <p className="font-light mt-1 text-md">A well-done steak...!</p>
              <p className="mt-7">$80.00</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Menu;
