import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="px-4 py-2 flex justify-between container mx-auto">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        Restaurant{" "}
      </Link>
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
  );
};

export default NavBar;
