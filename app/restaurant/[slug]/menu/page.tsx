import React from "react";
import NavBar from "../../../components/NavBar";
import Header from "../components/Header";
import RestaurantMenu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";
import SubTitle from "../components/SubTitle";

const Menu = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-full">
      <NavBar />
      <Header />
      <div className="mx-auto relative -mt-12 container px-20">
        <article className="justify-between items-start bg-white rounded p-3 shadow-lg">
          <RestaurantNavBar />
          <SubTitle>Menu</SubTitle>
          <RestaurantMenu />
        </article>
      </div>
    </main>
  );
};

export default Menu;
