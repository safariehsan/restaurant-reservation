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
      </main>
    </main>
  );
}
