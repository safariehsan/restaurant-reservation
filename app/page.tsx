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
        <header className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] flex text-center flex-col justify-center items-center">
          <h1 className="text-4xlg text-white font-bold mb-4">
            Find your table for any occasion
          </h1>
          <button className="bg-gray-100 rounded px-2 py-1">Reserve</button>
        </header>
        {/* HEADER */}
      </main>
    </main>
  );
}
