import React from "react";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SideBar from "./components/SideBar";

const Search = () => {
  return (
    <>
      <Header />
      <div className="flex w-2/3 m-auto justify-between items-start mt-5 bg-white shadow p-2">
        <SideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
};

export default Search;
