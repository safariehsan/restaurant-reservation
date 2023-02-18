import Link from "next/link";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import RestaurantCard from "./components/RestaurantCard";

export default function Home() {
  return (
    <main className="bg-gray-200 min-h-screen w-full">
      <NavBar />
      <Header />
      {/* CARDS */}
      <div className="py-3 px-36 mt-5 flex flex-wrap">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
      {/* CARDS */}
    </main>
  );
}
