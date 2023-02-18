import React from "react";

const Images = () => {
  return (
    <>
      <nav className="flex justify-start border-b-2 border-gray-200 gap-6 py-3">
        <a
          href=""
          className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
        >
          All
        </a>
        <a
          href=""
          className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
        >
          Inside
        </a>
        <a
          href=""
          className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
        >
          Outside
        </a>
      </nav>
      <div className="grid grid-rows-2 grid-flow-col gap-2 mt-3">
        <img src="./img1.png" className="rounded row-span-2 col-span-3" />
        <img src="./img2.png" className="rounded col-span-2" />
        <img src="./img3.png" className="rounded col-span-2" />
        <img src="./img4.png" className="rounded col-span-2" />
        <img src="./img5.jpg" className="rounded col-span-2" />
      </div>
    </>
  );
};

export default Images;
