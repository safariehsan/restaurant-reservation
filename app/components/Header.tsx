import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="h-72 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex text-center flex-col justify-center items-center">
      <h1 className="text-3xlg text-white font-bold mb-4">
        Find your table for any occasion
      </h1>
      <SearchBar />
    </header>
  );
};

export default Header;
