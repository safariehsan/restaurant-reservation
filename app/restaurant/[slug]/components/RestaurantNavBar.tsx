import Link from "next/link";
import React from "react";

const RestaurantNavBar = () => {
  return (
    <nav className="flex justify-start border-b-2 border-gray-200 gap-6 pb-3 ">
      <Link href="/restaurant/test">
        <span className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold">
          Overview
        </span>
      </Link>
      <Link href="/restaurant/test/menu">
        <span className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold">
          Menu
        </span>
      </Link>
    </nav>
  );
};

export default RestaurantNavBar;
