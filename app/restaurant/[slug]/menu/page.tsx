import React from "react";
import Header from "../components/Header";
import RestaurantMenu from "../components/Menu";
import RestaurantNavBar from "../components/RestaurantNavBar";
import SubTitle from "../components/SubTitle";
import RestaurantLayout from "../layout";

const Menu = () => {
  return (
    <RestaurantLayout>
      <article className="justify-between items-start bg-white rounded p-3 shadow-lg w-full">
        <RestaurantNavBar />
        <SubTitle>Menu</SubTitle>
        <RestaurantMenu />
      </article>
    </RestaurantLayout>
  );
};

export default Menu;
