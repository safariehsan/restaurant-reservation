import Link from "next/link";
import React from "react";

const RestaurantCard = () => {
  return (
    <Link href="/restaurant/test">
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500">
        <img src="./photo.jpg" alt="" className="w-full h-36" />
        <div className="p-3">
          <h3 className="font-semibold text-2xl mb-2">Animar</h3>
          <div className="flex items-start">
            <div className="">*****</div>
            <p className="pl-4">75 reviews</p>
          </div>
          <div className="flex text-base font-light mr-3 capitalize">
            <p className="mr-3">Mexican</p>
            <p className="mr-3">$$$$</p>
            <p>Toronto</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
