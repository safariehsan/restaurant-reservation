import Link from "next/link";
import React from "react";

const RestaurantDetail = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-full">
      <nav className="p-2 flex justify-between container mx-auto">
        <a href="" className="font-bold text-gray-700 text-2xl">
          {" "}
          Restaurant{" "}
        </a>
        <div>
          <div className="flex">
            <button className="bg-indigo-400 text-white px-2 py-1 text-base rounded hover:bg-indigo-500 transition-all duration-500">
              Sign in
            </button>
            <button className="text-gray-600 px-2 py-1 text-base rounded hover:text-gray-800 transition-all duration-500">
              Sign up
            </button>
          </div>
        </div>
      </nav>
      <header className="relative h-96 bg-center overflow-hidden bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex text-center flex-col justify-center items-center">
        <img
          src="./photo-lg.jpg"
          className="absolute w-full opacity-50"
          alt="banner"
        />
        <h1 className="z-20 text-5xlg drop-shadow-md text-white capitalize text-center font-semibold">
          Chloelys at The Hilton (Toronto)
        </h1>
      </header>
      <div className="flex mx-auto flex-row relative -mt-12 container gap-3 px-20">
        <article className="basis-2/3 justify-between items-start bg-white rounded p-3 shadow-lg">
          <nav className="flex justify-start border-b-2 border-gray-200 gap-6 pb-3 ">
            <Link href="/restaurant/test">
              <span className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold">
                Overview
              </span>
            </Link>
            <a
              href=""
              className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
            >
              Photo
            </a>
            <Link href="/restaurant/test/menu">
              <span className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold">
                Menu
              </span>
            </Link>
            <a
              href=""
              className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
            >
              Reviews
            </a>
          </nav>
          <h2 className="text-4xlg font-bold py-5">Restaurant Name Here...</h2>
          <div className="flex justify-start gap-6">
            <div className="rate flex gap-2">
              <span>*****</span>
              <span>4.5</span>
            </div>
            <div className="reviews flex gap-2">
              <span>icon</span>
              <span>6 reviews</span>
            </div>
          </div>
          <div className="pt-3">
            <p>
              Nomi provides an exclusive and intimate dining experience of the
              highest caliber, using only the finest ingredients. Nomi provides
              an exclusive and intimate dining experience of the highest
              caliber, using only the finest ingredients.
            </p>
          </div>
          <h3 className="text-md font-semibold pt-3 border-b-2 border-gray-100 pb-2">
            7 Photos
          </h3>
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
          <div>
            <h3 className="text-md font-semibold pt-3 border-b-2 border-gray-100 pb-2">
              What 100 people said about this restaurant.
            </h3>
            <div className="border-b pb-7 mb-7 mt-5">
              <div className="flex">
                <div className="w-1/6 flex flex-col items-center">
                  <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                    <h3 className="text-white text-2xlg">ES</h3>
                  </div>
                  <p>Ehsan Safari</p>
                </div>
                <div className="ml-10 w-5/6">
                  <div className="flex items-center">
                    <div className="flex mr-5">*****</div>
                  </div>
                  <div className="mt-5">
                    <p className="text-base font-light">
                      At present, Chloelys at The Hilton Tel-Aviv has no
                      reviews. Please add a review after your dining experience
                      to help others make a decision about where to eat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <aside className="basis-1/3 relative">
          <div className="sticky top-0 left-0 right-0 bg-white rounded p-3 shadow">
            <div className="border-b mb-2 pb-2">
              <h4 className="mr-7 text-lg font-bold">Make a reservation</h4>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Party size</label>
              <select className="border-b py-3 font-light" name="" id="">
                <option value="">1 person</option>
                <option value="">2 people</option>
                <option value="">3 people</option>
              </select>
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex flex-col basis-1/2">
                <label htmlFor="">Date</label>
                <input
                  type="date"
                  className="font-light py-3 border-b w-full"
                />
              </div>
              <div className="flex flex-col basis-1/2">
                <label htmlFor="">Time</label>
                <select className="font-light py-3 border-b w-full">
                  <option value="">07:30 PM</option>
                  <option value="">09:30 PM</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <button className="bg-red-600 rounded text-white w-full font-semibold py-2">
                Find a time
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default RestaurantDetail;
