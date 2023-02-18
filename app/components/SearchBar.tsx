"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const onSearchHandler = () => {
    if (searchTerm !== "") router.push(`/search?${searchTerm}`);
  };
  return (
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
  );
};

export default SearchBar;
