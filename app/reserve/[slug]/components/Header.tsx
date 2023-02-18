import React from "react";

const Header = () => {
  return (
    <div>
      <h3 className="font-semibold">You're almost done!</h3>
      <div className="flex mt-5">
        <img className="w-32 h-18 rounded" src="./img3.png" alt="test" />
        <div className="ml-4">
          <h2 className="text-3xl font-semibold">Restaurant Name</h2>
          <div className="flex mt-3 gap-3">
            <p>Tuesday, 22, 2022</p>
            <p>07:30 PM</p>
            <p>3 people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
