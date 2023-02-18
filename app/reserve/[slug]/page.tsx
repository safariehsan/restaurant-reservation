import React from "react";

const Reserve = () => {
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
      <div className="border-t h-screen bg-white">
        <div className="w-3/5 m-auto py-9">
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
          <div className="mt-10 flex flex-wrap justify-between w-[660px]">
            <input
              type="text"
              className="border rounded p-3 w-80 mb-4"
              placeholder="First name"
            />
            <input
              type="text"
              className="border rounded p-3 w-80 mb-4"
              placeholder="Last name"
            />
            <input
              type="text"
              className="border rounded p-3 w-80 mb-4"
              placeholder="Phone number"
            />
            <input
              type="text"
              className="border rounded p-3 w-80 mb-4"
              placeholder="Ocassion"
            />
            <button className="bg-red-600 text-white w-full rounded py-3">
              Complete reservation
            </button>
            <p className="text-base font-light pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              consequuntur autem pariatur quos! Explicabo nobis unde suscipit
              pariatur illo dolor quia veniam recusandae sit reprehenderit.
              Eveniet velit laborum enim distinctio.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Reserve;
