import Link from "next/link";
import React from "react";

const RestaurantCard = () => {
  return (
    <div className="border-b flex pb-5">
      <img src="./img2.png" alt="test" className="rounded w-44" />
      <div className="pl-5">
        <h3 className="text-2xlg font-semibold">Restaurant Name</h3>
        <div className="flex items-start">
          <p>*****</p>
          <p className="ml-2">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-md gap-3">
            <p>$$$</p>
            <p>Mexican</p>
            <p>Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/test">Read more information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
