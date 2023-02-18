import React from "react";

const RestaurantMenu = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="border rounded p-3 basis-1/2 mb-3">
        <h3 className="font-semibold text-lg">Surf and Turf</h3>
        <p className="font-light mt-1 text-md">A well-done steak...!</p>
        <p className="mt-7">$80.00</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
