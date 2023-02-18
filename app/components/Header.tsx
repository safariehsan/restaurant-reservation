"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const onSearchHandler = () => {
    if (searchTerm !== "") router.push(`/search?${searchTerm}`);
  };
  return (
    <header className="h-72 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex text-center flex-col justify-center items-center">
      <h1 className="text-3xlg text-white font-bold mb-4">
        Find your table for any occasion
      </h1>
      <div className="flex flex-row">
        <input
          className="text-left p-2 w-[350px] flex justify-center rounded mr-2"
          type="text"
          placeholder="City, State, ..."
          onChange={(e: any) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={onSearchHandler}
          className="bg-red-600 text-white rounded px-4 py-1 text-lg font-semibold"
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
