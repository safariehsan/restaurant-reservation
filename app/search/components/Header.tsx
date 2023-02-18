import React from "react";

const Header = () => {
  return (
    <header className="h-24 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex text-center flex-col justify-center items-center">
      <div className="flex flex-row">
        <input
          className="text-left p-2 w-[350px] flex justify-center rounded mr-2"
          type="text"
          placeholder="City, State, ..."
        />
        <button className="bg-red-600 text-white rounded px-4 py-1 text-lg font-semibold">
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
