import React from "react";

const SideBar = () => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h3 className="mb-2">Region</h3>
        <p className="font-light text-md">Toronto</p>
        <p className="font-light text-md">Hamilton</p>
        <p className="font-light text-md">Ottawa</p>
        <p className="font-light text-md">Niagra</p>
      </div>
      <div className="border-b pb-4 mt-3">
        <h3 className="mb-2">Cuisine</h3>
        <p className="font-light text-md">Mexican</p>
        <p className="font-light text-md">Italian</p>
        <p className="font-light text-md">Chinese</p>
        <p className="font-light text-md">Persian</p>
      </div>
      <div className="mt-3 pb-4">
        <h3>Price</h3>
        <div className="flex">
          <button className="border w-full text-md font-light rounded-l p-2">
            $
          </button>
          <button className="border-r border-t border-b w-full text-md font-light p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-md font-light rounded-r p-2">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
