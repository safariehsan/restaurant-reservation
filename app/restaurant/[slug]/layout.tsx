import React from "react";
import Header from "./components/Header";

const RestaurantLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex mx-auto flex-row relative -mt-12 container gap-3 px-20">
        {children}
      </div>
    </>
  );
};

export default RestaurantLayout;
