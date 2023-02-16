export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="m-auto bg-white max-w-screen-xlg">
        {/* NAVBAR */}
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
        {/* NAVBAR */}
        {/* HEADER */}
        <header className="h-72 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex text-center flex-col justify-center items-center">
          <h1 className="text-3xlg text-white font-bold mb-4">
            Find your table for any occasion
          </h1>
          <div className="flex flex-row">
            <input
              className="text-left p-2 w-[350px] flex justify-center rounded mr-2"
              type="text"
              placeholder="City, State, ..."
            />
            <button className="bg-red-600 text-white rounded px-3 py-1 text-lg font-semibold">
              Search
            </button>
          </div>
        </header>
        {/* HEADER */}
      </main>
    </main>
  );
}
