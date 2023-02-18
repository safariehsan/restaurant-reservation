import React from "react";
import SearchBar from "../../components/SearchBar";

const Header = () => {
  return (
    <header className="h-24 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex text-center flex-col justify-center items-center">
      <SearchBar />
    </header>
  );
};

export default Header;
