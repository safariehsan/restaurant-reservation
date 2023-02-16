export default function Home() {
  return (
    <main className="bg-gray-200 min-h-screen w-screen">
      <main className="m-auto bg-white max-w-screen-2xlg">
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
            Restaurant
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
        <header className="relative h-96 overflow-hidden bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex text-center flex-col justify-center items-center">
          <img
            src="./photo-lg.jpg"
            className="absolute w-full opacity-50"
            alt="banner"
          />
          <h1 className="z-20 text-5xlg drop-shadow-md text-white capitalize text-center">
            Restaurant Name (Toronto)
          </h1>
        </header>
        <article className="flex m-auto w-2/3 justify-between items-start -mt-12 relative">
          <div className="bg-white w-[70%] rounded p-3 shadow-lg h-72">
            <nav className="flex justify-start border-b-2 border-gray-200 gap-6 pb-3 ">
              <a
                href=""
                className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
              >
                Overview
              </a>
              <a
                href=""
                className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
              >
                Photo
              </a>
              <a
                href=""
                className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
              >
                Menu
              </a>
              <a
                href=""
                className="text-base text-gray-500 hover:text-gray-900 transition-all duration-500 font-semibold"
              >
                Reviews
              </a>
            </nav>
            <h1 className="text-4xlg font-bold py-5">
              Restaurant Name Here...
            </h1>
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
                highest caliber, using only the finest ingredients. Nomi
                provides an exclusive and intimate dining experience of the
                highest caliber, using only the finest ingredients.
              </p>
            </div>
          </div>
        </article>
      </main>
    </main>
  );
}
