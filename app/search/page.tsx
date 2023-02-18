import React from "react";
import NavBar from "../components/NavBar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SideBar from "./components/SideBar";

const Search = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-full">
      <NavBar />
      <Header />
      <div className="flex w-2/3 m-auto justify-between items-start mt-5 bg-white shadow p-2">
        <SideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </main>
  );
};

export default Search;
