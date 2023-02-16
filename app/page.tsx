export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="m-auto bg-white max-w-screen-lg">
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
      </main>
    </main>
  );
}
